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
      <div className="flex   gap-4 mx-auto flex-wrap">
        {filteredVideosArr?.map((video) => (
          <VideoCard key={video?._id} videoData={video} />
        ))}
      </div>
    </>
  );
};
