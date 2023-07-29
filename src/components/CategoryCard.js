import { useNavigate } from "react-router-dom";

export const CategoryCard = ({ categoryData }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="cursor-pointer "
        onClick={() => navigate(`/category/${categoryData?.category}`)}
      >
        <div className="w-64 h-48">
          <img
            src={categoryData?.thumbnail}
            alt={categoryData?.category}
            className="w-full h-full"
          />
        </div>

        <p className="text-center bg-black text-white">
          {categoryData?.category}
        </p>
      </div>
    </>
  );
};
