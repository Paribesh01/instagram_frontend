import axios, { AxiosError, AxiosResponse } from "axios";
import { useCallback, useState } from "react";
import { axiosClient } from "../lib/httpClient";
import { currentUser } from "../intreface/currentUser";
import{useSetRecoilState}from "recoil"
import { currentProfileState } from "../store/atoms/profile";
import { useNavigate } from "react-router-dom";


export function useProfile() {
    const navigate = useNavigate()
    const setCurrentUSerState = useSetRecoilState(currentProfileState)

    const getProfile = useCallback(async () => {
        try {           
            const response = (await axiosClient.get("/auth/getProfile"));
            
            if ( response.data) {
                const profileData = response.data as any
                setCurrentUSerState(profileData)
            }

            // Handle other status codes if needed
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const axiosError = error as AxiosError;
                console.log("Profile Error:", axiosError.response?.data);
                if(error.response?.status){
                    localStorage.removeItem("token")
                }
                // Handle specific error cases if needed
            } else {
                console.error("Network Error:", error);
            }
            navigate("/login")
        }

        return null; // Return null if profile fetch fails
    }, [setCurrentUSerState]);
   

    return { getProfile};
}
