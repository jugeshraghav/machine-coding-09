import { CategoryCard } from "../components/CategoryCard";
import { useData } from "../index";

export const Categories = () => {
  const { state } = useData();
  console.log(state?.categories);
  return (
    <>
      <div className="flex gap-4 flex-wrap ">
        {state?.categories?.map((category) => (
          <CategoryCard key={category?._id} categoryData={category} />
        ))}
      </div>
    </>
  );
};
