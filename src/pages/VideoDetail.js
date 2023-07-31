import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { AiFillClockCircle, AiOutlineClockCircle } from "react-icons/ai";
import { SuggesstionVideoCard } from "../components/SuggestionVideoCard";
import { NoteModal } from "../modals/NoteModal";
import { useData } from "../contexts/DataContext";
import { isInWatchLater } from "../utils/Utils";
import { CgPlayListAdd } from "react-icons/cg";

export const VideoDetail = () => {
  const [showNoteModal, setShowNoteModal] = useState(false);
  const [from, setFrom] = useState("add");
  const [noteId, setNoteId] = useState(null);
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

  const isVideoInWatchLater = isInWatchLater(watchLater, videoId);

  //handlers
  const handleOpen = () => {
    setShowNoteModal(true);
  };
  const handleClose = () => {
    setShowNoteModal(false);
  };

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
    setFrom("edit");
    setNoteId(noteId);
    handleOpen();
    const currentNote = notesArr?.find(({ id }) => id === noteId);
    console.log(currentNote?.note);
    dispatch({ type: "SET_NOTE_TEXT", payLoad: currentNote?.note });
  };
  const addNoteClick = () => {
    setFrom("add");
    setNoteId(null);
    handleOpen();
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
      <NoteModal
        from={from}
        noteId={noteId}
        show={showNoteModal}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
      <div className="md:flex gap-2 sm:mx-auto mt-4">
        <div className="md:w-3/4">
          <iframe
            src={currentVideo.src}
            title={currentVideo.title}
            allowFullScreen
            className="w-full  aspect-video mx-auto"
          ></iframe>
          <div className="flex justify-between md:py-4 md:px-2 p-1 border-b-2">
            <div className="flex items-center gap-2">
              {" "}
              <img
                src={currentVideo?.thumbnail}
                alt={currentVideo?.title}
                className="w-10 h-10 rounded-full"
              />
              <p className="md:font-bold text-sm ">{currentVideo?.title}</p>
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
              <AiFillEdit
                onClick={() => addNoteClick()}
                className="text-lg cursor-pointer"
              />
            </div>
          </div>
          {/* Notes */}
          <div>
            <p className="font-bold">My Notes</p>
            {notesArr?.map(({ id, note }) => (
              <div key={id} className="flex justify-between p-2">
                <p className="font-bold text-sm">{note}</p>
                <p className="flex gap-4 text-sm">
                  <AiFillEdit
                    from="edit"
                    onClick={() => editNotehandler(id, videoId)}
                    className="text-lg cursor-pointer"
                  />

                  <AiFillDelete
                    onClick={() => deleteNotehandler(id, videoId)}
                  />
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 md:w-2/4 ">
          {remainingVideos?.map((video) => (
            <SuggesstionVideoCard key={video?._id} videoData={video} />
          ))}
        </div>
      </div>
    </>
  );
};
