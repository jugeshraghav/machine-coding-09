import { AiFillDelete } from "react-icons/ai";
import { AiTwotoneEdit } from "react-icons/ai";
import { CgPlayListAdd } from "react-icons/cg";
import { AiFillClockCircle, AiOutlineClockCircle } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useData } from "../contexts/DataContext";
import { SuggesstionVideoCard } from "../components/SuggestionVideoCard";
import { isInWatchLater } from "../utils/Utils";
import { NoteModal } from "../modals/NoteModal";
import { useEffect } from "react";

export const VideoDetail = () => {
  const { videoId } = useParams();
  const {
    state,
    dispatch,
    state: { videos, watchLater, noteTextArr },
    watchLaterHandler,
  } = useData();
  const currentVideo = videos?.find(({ _id }) => _id == videoId);
  const remainingVideos = videos?.filter(
    ({ _id }) => _id !== currentVideo?._id
  );

  const notesArr = currentVideo?.notes;
  console.log(notesArr);

  const isVideoInWatchLater = isInWatchLater(watchLater, videoId);

  //handlers
  const updateNotesInVideosHandler = (videoId) => {
    const updatedArrayWithNotes = state?.videos?.map((video) =>
      video?._id === Number(videoId)
        ? { ...video, notes: [...state?.noteTextArr] }
        : video
    );

    dispatch({
      type: "ADD_NOTES_ARR_TO_VIDEOS",
      payLoad: updatedArrayWithNotes,
    });
  };

  const editNotehandler = (noteId, videoId) => {
    console.log(notesArr);
    const currentNote = notesArr?.find(({ id }) => id === noteId);
    console.log(currentNote?.note);
    dispatch({ type: "SET_NOTE_TEXT", payLoad: currentNote?.note });
  };
  const deleteNotehandler = (noteId, videoId) => {
    dispatch({
      type: "DELETE_NOTES_ARR",
      payLoad: noteTextArr?.filter(({ id }) => id !== noteId),
    });
  };

  useEffect(() => {
    updateNotesInVideosHandler(videoId);
  }, [noteTextArr]);
  return (
    <>
      <div className="flex gap-2 ">
        <div className="w-3/4">
          <video className="w-full h-96" controls autoPlay loop>
            <source src={currentVideo?.src} type="video/mp4"></source>
          </video>
          <div className="flex justify-between py-4 px-2 border-b-2">
            <div className="flex items-center gap-2">
              {" "}
              <img
                src={currentVideo?.thumbnail}
                alt={currentVideo?.title}
                className="w-10 h-10 rounded-full"
              />
              <p className="font-bold text-sm">{currentVideo?.title}</p>
            </div>
            <div className=" flex gap-4 items-center text-lg text-blue-500">
              {isVideoInWatchLater ? (
                <AiFillClockCircle
                  onClick={() => {
                    watchLaterHandler(Number(videoId));
                  }}
                  className="cursor-pointer"
                />
              ) : (
                <AiOutlineClockCircle
                  onClick={() => {
                    watchLaterHandler(Number(videoId));
                  }}
                  className="cursor-pointer"
                />
              )}
              <CgPlayListAdd className="cursor-pointer" />
              <NoteModal />
            </div>
          </div>
          {/* Notes */}
          <div>
            <p className="font-bold">My Notes</p>
            {notesArr?.map(({ id, note }) => (
              <div key={id} className="flex justify-between p-2">
                <p className="font-bold text-sm">{note}</p>
                <p className="flex gap-4 text-sm">
                  <NoteModal
                    from="edit"
                    onClick={() => editNotehandler(id, videoId)}
                  />
                  <AiFillDelete
                    onClick={() => deleteNotehandler(id, videoId)}
                  />
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 w-2/4">
          {remainingVideos?.map((video) => (
            <SuggesstionVideoCard key={video?._id} videoData={video} />
          ))}
        </div>
      </div>
    </>
  );
};
