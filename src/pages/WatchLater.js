import { useData } from "../contexts/DataContext";
import { VideoCard } from "../components/Videocard";

export const WatchLater = () => {
  const {
    state: { watchLater },
  } = useData();

  return (
    <>
      <div className="flex   gap-4 mx-auto flex-wrap">
        {watchLater?.map((video) => (
          <VideoCard key={video?._id} videoData={video} />
        ))}
      </div>
    </>
  );
};
