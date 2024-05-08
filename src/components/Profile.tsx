import { useState, useEffect } from "react";
import { useProfile } from "../hooks/useProfile";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { currentProfileState } from "../store/atoms/profile";
import Nav from "./Nav";
import Header from "./profile SubComponents/Header";
import Posts from "./profile SubComponents/Posts";
import "./profile SubComponents/posts.css";

export function Profile() {
  const { getProfile } = useProfile();
  useEffect(() => {
    getProfile();
  }, []);

  const profiledata = useRecoilValue(currentProfileState);
  console.log(profiledata);
  return (
    <>
      <Nav />
      <Header />
      <Posts />
    </>

    // <h1>
    //   Profile
    //   <img
    //     src={
    //       "http://localhost:8080/user/public/img/" +
    //       profiledata.userPreferences.imageUrl
    //     }
    //     alt="no image"
    //   />
    //   <div>
    //     name:{profiledata.name}
    //     <br />
    //     bio:{profiledata.userPreferences.bio}
    //     <br />
    //     gender:{profiledata.userPreferences.gender}
    //     <br />
    //     website:{profiledata.userPreferences.website}
    //     <br />
    //     Following:{profiledata._count.following}
    //     <br />
    //     Followed:{profiledata._count.followedBy}
    //   </div>
    // </h1>
  );
}
