import { useData } from "../contexts/DataContext";
import { VideoCard } from "../components/Videocard";

export const WatchLater = () => {
  const {
    state: { watchLater },
  } = useData();

  return (
    <>
      <h1 className="font-bold text-lg text-center p-4">Watch Later</h1>
      <div className="flex   gap-4 mx-auto flex-wrap justify-center">
        {watchLater?.map((video) => (
          <VideoCard key={video?._id} videoData={video} />
        ))}
      </div>
    </>
  );
};
