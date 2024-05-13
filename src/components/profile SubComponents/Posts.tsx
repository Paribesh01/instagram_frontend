import React from "react";
import { PostBox } from "./PostBox";
import { useRecoilValue } from "recoil";
import { currentProfileState } from "../../store/atoms/profile";

function Posts() {
  const profiledata = useRecoilValue(currentProfileState);
  return (
    <div className="px-px md:px-3 ">
      {/* Mobile user info */}
      <ul className="flex md:hidden justify-around space-x-8 border-t text-center p-2 text-gray-600 leading-snug text-sm">
        <li>
          <span className="font-semibold text-gray-800 block">
            {profiledata._count.posts}
          </span>
          posts
        </li>
        <li>
          <span className="font-semibold text-gray-800 block">
            {profiledata._count.followedBy}
          </span>
          followers
        </li>
        <li>
          <span className="font-semibold text-gray-800 block">
            {profiledata._count.following}
          </span>
          following
        </li>
      </ul>

      {/* Instagram features */}
      <ul className="flex items-center justify-around md:justify-center space-x-12 uppercase tracking-widest font-semibold text-xs text-gray-600 border-t">
        <li className="md:border-t md:border-gray-700 md:-mt-px md:text-gray-700">
          <a className="inline-block p-3" href="#">
            <i className="fas fa-th-large text-xl md:text-xs"></i>
            <span className="hidden md:inline">post</span>
          </a>
        </li>
      </ul>

      {/* Flexbox grid */}
      <div className="flex flex-wrap -mx-px md:-mx-3   justify-center items-center">
        {profiledata.posts.map((post) => (
          <>
            <PostBox post={post} />
          </>
        ))}
      </div>
    </div>
  );
}

export default Posts;
