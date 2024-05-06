export interface currentUser{
    email:string,
    name:string,
    userPreferences:{
        bio:string | null,
        website:string|null,
        gender:"MALE"|"FEMALE"|"OTHERS",
        accountType:"PRIVATE"|"PUBLIC",
        imageUrl:string
    },
    _count:{
        followedBy:number,
        following:number
    }
}