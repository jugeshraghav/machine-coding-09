import { useLocation } from "react-router-dom";
import { useData } from "../contexts/DataContext";

export const Header = () => {
  const location = useLocation();
  const { state, dispatch } = useData();

  const inputHandler = (e) => {
    console.log(e.target.value);

    dispatch({ type: "SET_SEARCH_TEXT", payLoad: e.target.value });
  };
  return (
    <>
      <div className="flex justify-between">
        <p className="font-bold text-xl font-serif ">Video</p>
        {location?.pathname === "/explore" && (
          <input
            value={state?.searchText}
            placeholder="Search Videos"
            onChange={(e) => inputHandler(e)}
            className="border p-2 text-sm w-96 rounded-md"
          />
        )}
      </div>
    </>
  );
};
