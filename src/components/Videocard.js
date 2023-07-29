import { AiFillClockCircle } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useData } from "../contexts/DataContext";
import { isInWatchLater } from "../utils/Utils";
export const VideoCard = ({ videoData }) => {
  const navigate = useNavigate();

  const { state, watchLaterHandler } = useData();
  const isVideoInWatchLater = isInWatchLater(state?.watchLater, videoData?._id);

  return (
    <>
      <div
        className="w-96 h-96"
        onClick={() => navigate(`/video/${videoData?._id}`)}
      >
        <div className="relative w-96 h-64">
          <img
            src={videoData?.thumbnail}
            alt={videoData?.title}
            className="w-96 h-64"
          />
          <span className="absolute top-0 right-0 bg-white text-blue-500 p-2 text-lg rounded-bl-lg">
            {isVideoInWatchLater ? (
              <AiFillClockCircle
                onClick={(e) => {
                  e.stopPropagation();
                  watchLaterHandler(videoData?._id);
                }}
                className="cursor-pointer"
              />
            ) : (
              <AiOutlineClockCircle
                onClick={(e) => {
                  e.stopPropagation();
                  watchLaterHandler(videoData?._id);
                }}
                className="cursor-pointer"
              />
            )}
          </span>
        </div>
        <div className="flex flex-col gap-1 p-2">
          <div className="flex gap-2">
            <img
              src={videoData?.thumbnail}
              alt={videoData?.title}
              className="rounded-full w-10 h-10"
            />
            <div>
              <h1 className="text-sm font-bold">{videoData?.title}</h1>
              <p className="text-xs">{videoData?.category}</p>
              <p className="text-slate-500 text-xs">
                <span>{videoData?.views} views</span>| {videoData?.creator}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
