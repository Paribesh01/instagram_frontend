import axios, { AxiosError, AxiosResponse } from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export function useSignup(){
    const navigate = useNavigate()
    const signup = useCallback(

        async (email:string,name:string,password:string)=>{
            const responce = (await axios.post("http://localhost:8080/auth/register",{
                email,name,password
            }
            
            
            
            ).catch((error:AxiosError)=>{
                console.log(error)
            })
            )as AxiosResponse

            console.log(responce)
            if(responce.status == 201 ){
                if(responce.data.accessToken){
                    localStorage.setItem("token",responce.data.accessToken)
                    console.log("Navigated")
                    navigate("/")
                }
            }
        }


        ,[navigate]
    )
        return {
            signup
        }

}