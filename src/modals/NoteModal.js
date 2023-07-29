import { v4 as uuid } from "uuid";
import { AiFillEdit } from "react-icons/ai";
import { useState } from "react";

import { Button, Modal } from "@mui/material";
import { useData } from "../contexts/DataContext";
import { useParams } from "react-router-dom";

export const NoteModal = ({ from }) => {
  const { videoId } = useParams();
  const {
    state,
    state: { noteText, noteTextArr },
    updateNotesInVideosHandler,
    dispatch,
  } = useData();
  console.log(from);
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);

  localStorage.setItem("notesArr", JSON.stringify(state?.noteTextArr));

  const handleOpen = () => {
    setShowPlaylistModal(true);
  };
  const handleClose = () => {
    setShowPlaylistModal(false);
  };

  //handlers
  const noteInputHandler = (e) => {
    dispatch({ type: "SET_NOTE_TEXT", payLoad: e.target.value });
  };
  const addNoteHandler = () => {
    dispatch({
      type: "SET_NOTES_ARR",
      payLoad: [...state?.noteTextArr, { id: uuid(), note: noteText }],
    });
    dispatch({ type: "CLEAR_NOTE_TEXT" });
    handleClose();
  };

  const editNoteHandler = () => {};
  return (
    <>
      <AiFillEdit
        onClick={() => handleOpen()}
        className="text-lg cursor-pointer"
      />

      <Modal
        open={showPlaylistModal}
        onClose={handleClose}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <div
          className="bg-white rounded-lg flex flex-col gap-4 justify-between w-64 h-64 p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <h1 className="font-bold text-lg text-center">Add Notes</h1>

          <textarea
            value={noteText}
            placeholder="My Note"
            className="border p-2 "
            row="5"
            onChange={(e) => noteInputHandler(e)}
          ></textarea>

          {from === "edit" ? (
            <Button
              variant="contained"
              size="small"
              onClick={() => editNoteHandler()}
            >
              Edit Note
            </Button>
          ) : (
            <Button
              variant="contained"
              size="small"
              onClick={() => addNoteHandler()}
            >
              Add New Note
            </Button>
          )}
        </div>
      </Modal>
    </>
  );
};
