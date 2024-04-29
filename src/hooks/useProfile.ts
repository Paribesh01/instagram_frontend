import axios, { AxiosError, AxiosResponse } from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";



export function useProfile() {
    const navigate = useNavigate()
    const getProfile = useCallback(async (): Promise<AxiosResponse | null> => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                // No token available, handle accordingly
                return null;
            }

            const response = (await axios.get("http://localhost:8080/auth/getProfile", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }))as AxiosResponse;
            if(response.status==401){
                localStorage.removeItem("token")
                
            }
            if (response.status === 200 && response.data) {
                return response.data;
            }

            // Handle other status codes if needed
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const axiosError = error as AxiosError;
                console.log("Profile Error:", axiosError.response?.data);
                // Handle specific error cases if needed
            } else {
                console.error("Network Error:", error);
            }
        }

        return null; // Return null if profile fetch fails
    }, [0]);

    return { getProfile };
}
