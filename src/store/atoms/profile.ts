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
            following:0,
            posts:0
        },
       
        posts:[{
            id:0,
            title:"",
            content:"",
            imgUrl:"",
            _count:{
                likes:0,
                Comment:0
            }
        }]
        

    }
})