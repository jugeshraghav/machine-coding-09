import { useNavigate } from "react-router-dom";
export const SuggesstionVideoCard = ({ videoData }) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="md:w-96 sm:w-80 h-24 flex gap-2"
        onClick={() => navigate(`/video/${videoData?._id}`)}
      >
        <div className="relative w-48 h-24">
          <img
            src={videoData?.thumbnail}
            alt={videoData?.title}
            className="w-48 h-24 rounded-md"
          />
        </div>
        <div className="flex flex-col justify-around w-48">
          <h1 className="text-sm font-bold">{videoData?.title}</h1>
          <p className="text-xs">{videoData?.category}</p>
          <p className="text-slate-500 text-xs">
            <span>{videoData?.views} views</span>| {videoData?.creator}
          </p>
        </div>
      </div>
    </>
  );
};
