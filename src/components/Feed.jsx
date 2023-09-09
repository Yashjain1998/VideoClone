import React, { useContext, useEffect } from "react";
import VideoCard from "./VideoCard";
import { Context } from "../context/contextApi";

function Feed() {
  const { searchResults } = useContext(Context);
  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);
  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {searchResults.map(({ postId, submission, creator }) => {
            return (
              <VideoCard
                key={postId}
                keys={postId}
                video={submission}
                author={creator.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Feed;
