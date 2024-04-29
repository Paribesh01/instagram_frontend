import axios from "axios";



export const axiosClient = axios.create({
    baseURL:"http://localhost:8080"
})

export function setAxiosHeader (token:string){
    axiosClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}