import { useCallback } from "react";
import { axiosClient } from "../lib/httpClient";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";



export function useFeed(){
const navigate   = useNavigate()

    const getFeed = useCallback(async () => {
        try {           
            const response = (await axiosClient.get("/post/feed"));
            
            if ( response.data) {
                const feed = response.data as any
               return feed
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
    }, [navigate]);
    return{getFeed}
}