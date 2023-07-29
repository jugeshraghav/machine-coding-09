import { useParams } from "react-router-dom";
import { useData } from "../contexts/DataContext";
import { VideoCard } from "../components/Videocard";

export const CategoryList = () => {
  const { categoryName } = useParams();
  const {
    state: { videos },
  } = useData();
  const videoArrayOfGivenCategory = videos?.filter(
    ({ category }) => category === categoryName
  );

  return (
    <>
      <div className="flex   gap-4 mx-auto flex-wrap">
        {videoArrayOfGivenCategory?.map((video) => (
          <VideoCard key={video?._id} videoData={video} />
        ))}
      </div>
    </>
  );
};
