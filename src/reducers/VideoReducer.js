import { categories } from "../Data/Categories";
import { videos } from "../Data/Videos";

const initial_state = {
  categories: JSON.parse(localStorage.getItem("allCategories")) || categories,
  videos: JSON.parse(localStorage.getItem("allVideos")) || videos,
  playlist: JSON.parse(localStorage.getItem("allPlaylist")) || [],
  watchLater: JSON.parse(localStorage.getItem("allWatchLater")) || [],

  //Playlists
  myPlaylistDetails: { name: "", description: "" },

  //States
  searchText: "",

  noteText: "",
  noteTextArr: JSON.parse(localStorage.getItem("notesArr")) || [],
};
const videoReducer = (state, action) => {
  const { type, payLoad } = action;
  console.log(state);
  switch (type) {
    case "ADD_TO_PLAYLIST":
      return { ...state };
    //watch later
    case "ADD_TO_WATCH_LATER":
      return { ...state, watchLater: [...state?.watchLater, payLoad] };
    case "REMOVE_FROM_WATCH_LATER":
      return { ...state, watchLater: payLoad };

    //states
    case "SET_SEARCH_TEXT":
      console.log("matched");
      return { ...state, searchText: payLoad };

    //notes
    case "SET_NOTE_TEXT":
      return { ...state, noteText: payLoad };
    case "CLEAR_NOTE_TEXT":
      return { ...state, noteText: "" };
    case "SET_NOTES_ARR":
      return { ...state, noteTextArr: payLoad };
    case "DELETE_NOTES_ARR":
      return { ...state, noteTextArr: payLoad };
    case "ADD_NOTES_ARR_TO_VIDEOS":
      return { ...state, videos: payLoad };
    default:
      return { ...state };
  }
};

export { initial_state, videoReducer };
