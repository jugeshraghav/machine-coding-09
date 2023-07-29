import { VideoCard } from "../components/Videocard";
import { useData } from "../contexts/DataContext";

export const Explore = () => {
  const {
    state: { videos, searchText },
  } = useData();
  console.log(searchText);

  const filteredVideosArr =
    searchText.length > 0
      ? videos?.filter(({ title }) =>
          title?.toLowerCase().includes(searchText?.toLowerCase())
        )
      : videos;
  return (
    <>
      <h1 className="font-bold text-lg text-center p-4">Explore</h1>
      <div className="flex   gap-4 mx-auto flex-wrap justify-center">
        {filteredVideosArr?.map((video) => (
          <VideoCard key={video?._id} videoData={video} />
        ))}
      </div>
    </>
  );
};
