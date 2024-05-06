import { atom } from "recoil";


export const currentProfileState = atom({
    key:"currentProfileState",
    default:{
        email:"",
        name:"",
        userPreferences:{
            bio:null,
            website:null,
            gender:"MALE",
            imageUrl:"",
            accountType:"PUBLIC"

        },
        _count:{
            followedBy:0,
            following:0
        }
       
        
        

    }
})