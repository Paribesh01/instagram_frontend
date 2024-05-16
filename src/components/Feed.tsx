import { useEffect, useState } from "react";
import { useFeed } from "../hooks/useFeed";
import Nav from "./Nav";
import PostCard from "./PostCard";

export function Feed() {
  const { getFeed } = useFeed();
  const [feed, setFeed] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const foundFeed = await getFeed();
      setFeed(foundFeed);
      console.log(foundFeed); // Logging the fetched feed instead of 'feed'
    };

    fetchData();
  }, [getFeed]); // Using 'getFeed' as a dependency instead of a static value

  return (
    <>
      <Nav />
      <div className="">
        {/* Render feed only if it exists */}
        {feed &&
          feed.map((post: any) => (
            <PostCard key={post.id} post={post} feed={true} />
          ))}
      </div>
    </>
  );
}
