import axios, { AxiosError, AxiosResponse } from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { axiosClient, setAxiosHeader } from "../lib/httpClient";

export function useSignup(){
    const navigate = useNavigate()
    const signup = useCallback(

        async (email:string,name:string,password:string)=>{
            const responce = (await axiosClient.post("/auth/register",{
                email,name,password
            }
            
            
            
            ).catch((error:AxiosError)=>{
                console.log(error)
            })
            )as AxiosResponse

            console.log(responce)
            if(responce.status == 201 ){
                if(responce.data.access_token){
                    setAxiosHeader(responce.data.access_token)
                    localStorage.setItem("token",responce.data.access_token)
                    navigate("/")

                }
            }
        }


        ,[1]
    )
        return {
            signup
        }

}