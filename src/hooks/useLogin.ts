import axios, { AxiosError, AxiosResponse } from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { axiosClient, setAxiosHeader } from "../lib/httpClient";
import { toast } from 'react-toastify';

export function useLogin(){
    const navigate = useNavigate()
    const login = useCallback(

        async (email:string,password:string)=>{
            const responce = (await axiosClient.post("/auth/login",{
                email,password
            }
            
            
            
            ).catch((error:AxiosError)=>{
                
                toast("Incorrect Email or Password")
                console.log(error)
            })
            )as AxiosResponse
            
            console.log(responce)
            if(responce?.status == 201 ){
                if(responce.data.accessToken){
                    setAxiosHeader(responce.data.accessToken)
                    localStorage.setItem("token",responce.data.accessToken)
                    navigate("/")
                    toast("Logged In")
                }
            }
        }


        ,[1]
    )
        return {
            login
        }

}