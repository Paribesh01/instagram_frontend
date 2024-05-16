import React, { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import PostCard from "./PostCard";
import { currentProfileState } from "../store/atoms/profile";
import Nav from "./Nav";

export function FullPost(props: { id: string }) {
  const { id } = props;
  const profiledata = useRecoilValue(currentProfileState);
  const postRef = useRef<HTMLDivElement>(null);
  const [allPostRendered, setAllPostRendered] = useState(false);

  useEffect(() => {
    // Check if all post cards are rendered
    const allPostsRendered = profiledata.posts.every((post) =>
      document.getElementById(`post-${post.id}`)
    );
    if (allPostsRendered) {
      setAllPostRendered(true);
    }
  }, [profiledata.posts]);

  useEffect(() => {
    // Scroll to the post with the provided id once all post cards are rendered
    if (allPostRendered && id && postRef.current) {
      const postElement = document.getElementById(`post-${id}`);
      if (postElement) {
        postElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [id, allPostRendered]);

  return (
    <>
      <Nav />
      {profiledata.posts.map((post) => (
        <div
          key={post.id}
          ref={String(post.id) === id ? postRef : null}
          id={`post-${post.id}`}
        >
          <PostCard post={post} feed={false} />
        </div>
      ))}
    </>
  );
}
