import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { BsFillCheckCircleFill } from "react-icons/bs";
import {BiSolidDislike,BiDislike} from "react-icons/bi";
import {BiLike,BiSolidLike} from "react-icons/bi";
import { Context } from "../context/contextApi";
import SuggestionVideoCard from "./SuggestionVideoCard";
const VideoDetails = () => {
  const [video, setVideo] = useState({});
  const [relatedVideos, setRelatedVideos] = useState([]);
  const { id } = useParams();
  const { searchResults } = useContext(Context);
  const [comment, setcomment] = useState("");
  const [data, setdata] = useState(null);
  const [Disliked, setDisliked] = useState(false);
  const [liked, setliked] = useState(false);
  const [like, setlike] = useState(0);

  useEffect(() => getcomment(id), [id]);
  useEffect(() => {
    document.getElementById("root").classList.add("custom-h");
    VideoDetails(id, searchResults);
  }, [id, searchResults]);
  function getcomment(id) {
    const stored = JSON.parse(localStorage.getItem(id));
    setdata(stored);
    if(stored.like){
      setlike(stored.like);
    }
    setcomment("");
  }

  const VideoDetails = (id, searchResults) => {
    const {
      submission: { title, description, mediaUrl },
      creator: { name },
    } = searchResults.find(({ postId }) => postId === id);
    setVideo({ title, mediaUrl, name, description });
    const listvideo = searchResults.filter(({ postId }) => postId !== id);
    setRelatedVideos(listvideo);
  };
  function handersubmit(e) {
    e.preventDefault();
    localStorage.setItem(id, JSON.stringify({like:(data&&data.like)?data.like:0,comments:(data&&data.comments)?[...data.comments,comment]:[comment]}));
    getcomment(id);
  }
  const handlelike = () => {
    setliked(true);
    setlike(like+1)
    localStorage.setItem(id, JSON.stringify({like:(data&&data.like)?(+data.like)+1:1,comments:(data&&data.comments)?data.comments:null}));

    setTimeout(() => {
      setliked(false);
    }, 1000);
  };
  const handleDislike = () => {
    setDisliked(true);
    localStorage.setItem(id, JSON.stringify({like:(data&&data.like)?(+data.like)-1:0,comments:(data&&data.comments)?data.comments:null}));
   setlike(like-1)

    setTimeout(() => {
      setDisliked(false);
    }, 1000);
  };
  console.log(data);
  return (
    <div className="flex justify-center flex-row h-[calc(100%-56px)] bg-black">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
          <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
            <ReactPlayer
              url={video?.mediaUrl}
              controls
              width="100%"
              height="100%"
              style={{ backgroundColor: "#000000" }}
              playing={true}
            />
          </div>
          <div className="text-white font-bold text-sm md:text-xl mt-4 line-clamp-2">
            {video?.title}
          </div>

          <div className="flex justify-between flex-col md:flex-row mt-4">
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-col ml-3">
                <div className="text-white text-md font-semibold flex items-center">
                  {video?.name}
                  <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                </div>
              </div>
              <div class="bg-black p-4">
                <div class="flex items-center space-x-2">
                  <button class="bg-black text-white py-2 px-2 rounded-full"  onClick={handlelike}>
                  {liked ? <BiSolidLike size="2rem" /> : <BiLike size="2rem" />}
                  </button>
                  <p className="text-white font-sans text-xl">{like}</p>

                  <button class="bg-black text-white py-2 px-2 rounded-full"  onClick={handleDislike}>
                  {Disliked ? <BiSolidDislike size="2rem" /> : <BiDislike size="2rem" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-white text-sm md:text-base mt-2 px-4 py-2 line-clamp-5 bg-gray-900 rounded-md">
            {video?.description}
          </div>
          {/* comment code */}
          <form onSubmit={handersubmit} className="flex flex-col">
            <div className="mt-4 flex items-center">
              <textarea
                value={comment}
                onChange={(e) => setcomment(e.target.value)}
                rows="3"
                name="comment"
                id="comment"
                className="text-white w-full h-full rounded-t-lg bg-gray-900 p-2 placeholder-white"
                placeholder="Add your comment..."
              ></textarea>
            </div>
            <hr className="border-t border-gray-300" />
            <div className="flex justify-between items-center rounded-b-lg bg-gray-900">
              <div className="flex  p-2">
                <div className="mr-2 ml-2">
                  <button type="button" className="w-9">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="oc se text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="ml-2 mr-2">
                  <label
                    className="t text-white"
                    id="headlessui-listbox-label-1"
                    data-headlessui-state=""
                  ></label>
                  <div className="ab">
                    <button
                      className="ab fs ly nh rj yz ze ads axp bkx w-10"
                      id="headlessui-listbox-button-2"
                      type="button"
                      aria-haspopup="listbox"
                      aria-expanded="false"
                      data-headlessui-state=""
                      aria-labelledby="headlessui-listbox-label-1 headlessui-listbox-button-2"
                    >
                      <span className="lx yz ze">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="oc se up text-white"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="text-white bg-blue-800 px-8 py-2 mt-2 rounded-lg text-2xl"
                >
                  Post
                </button>
              </div>
            </div>
          </form>
          <div className="flex flex-col justify-center">
            {
              (data && data.comments)?data.comments.map((comment, index) => {
                return (
                  <div
                    key={index}
                    className="text-white text-sm md:text-base mt-2 px-4 py-2 line-clamp-5 bg-gray-900 rounded-md"
                  >
                    {comment}
                  </div>
                );
              }):""}
          </div>
        </div>
        <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px]">
          {relatedVideos?.map(({ postId, submission, creator }) => {
            return (
              <SuggestionVideoCard
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
};

export default VideoDetails;
