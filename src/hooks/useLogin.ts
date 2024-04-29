import axios, { AxiosError, AxiosResponse } from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export function useLogin(){
    const navigate = useNavigate()
    const login = useCallback(

        async (email:string,password:string)=>{
            const responce = (await axios.post("http://localhost:8080/auth/login",{
                email,password
            }
            
            
            
            ).catch((error:AxiosError)=>{
                console.log(error)
            })
            )as AxiosResponse

            console.log(responce)
            if(responce.status == 201 ){
                if(responce.data.accessToken){
                    localStorage.setItem("token",responce.data.accessToken)
                    navigate("/")
                }
            }
        }


        ,[1]
    )
        return {
            login
        }

}