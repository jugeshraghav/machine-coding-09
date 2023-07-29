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
      <h1 className="font-bold text-lg text-center p-4">
        {categoryName} items
      </h1>
      <div className="flex   gap-4 mx-auto flex-wrap justify-center">
        {videoArrayOfGivenCategory?.map((video) => (
          <VideoCard key={video?._id} videoData={video} />
        ))}
      </div>
    </>
  );
};
