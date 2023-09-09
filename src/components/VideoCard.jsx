import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const VideoCard = ({ keys, video, author }) => {
  return (
    <Link to={`/video/${keys}`}>
      <div className="flex flex-col mb-8">
        <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={video?.thumbnail}
            alt="kbjhgkljj"
          />
        </div>
        <div className="flex text-white mt-3">
          <div className="flex flex-col ml-3 overflow-hidden">
            <span className="text-sm font-bold line-clamp-2">
              {video?.title}
            </span>
            <span className="text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center">
              {author}
              <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
