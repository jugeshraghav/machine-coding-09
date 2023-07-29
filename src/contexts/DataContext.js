import { useContext, useReducer } from "react";
import { createContext } from "react";

import { initial_state, videoReducer } from "../reducers/VideoReducer";
import { isInWatchLater } from "../utils/Utils";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(videoReducer, initial_state);

  localStorage.setItem("allVideos", JSON.stringify(state?.videos));
  localStorage.setItem("allcategories", JSON.stringify(state?.categories));
  localStorage.setItem("allPlaylist", JSON.stringify(state?.playlist));
  localStorage.setItem("allWatchLater", JSON.stringify(state?.watchLater));

  console.log(state?.watchLater);
  //handlers
  const watchLaterHandler = (videoId) => {
    const isVideoInWatchLater = isInWatchLater(state?.watchLater, videoId);
    console.log(isVideoInWatchLater);
    if (!isVideoInWatchLater) {
      const videoToBeAddedInWatchLater = state?.videos?.find(
        ({ _id }) => _id === videoId
      );
      dispatch({
        type: "ADD_TO_WATCH_LATER",
        payLoad: videoToBeAddedInWatchLater,
      });
    } else {
      const updatedWatchLaterArr = state?.watchLater?.filter(
        ({ _id }) => _id !== videoId
      );
      dispatch({
        type: "REMOVE_FROM_WATCH_LATER",
        payLoad: updatedWatchLaterArr,
      });
    }
  };

  return (
    <DataContext.Provider value={{ state, dispatch, watchLaterHandler }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
