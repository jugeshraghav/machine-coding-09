import { v4 as uuid } from "uuid";
import { AiFillEdit } from "react-icons/ai";
import { useState } from "react";

import { Button, Modal } from "@mui/material";
import { useData } from "../contexts/DataContext";
import { useParams } from "react-router-dom";

export const NoteModal = ({ from, noteId, show, handleOpen, handleClose }) => {
  const { videoId } = useParams();
  const {
    state,
    state: { noteText, noteTextArr },
    updateNotesInVideosHandler,
    dispatch,
  } = useData();
  console.log(from);

  localStorage.setItem("notesArr", JSON.stringify(state?.noteTextArr));

  const currentVideo = state?.videos?.find(({ _id }) => _id == videoId);
  const notesArr = currentVideo?.notes;
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

  const editNoteHandler = () => {
    const updatedNotesArr = notesArr?.map((note) =>
      note?.id === noteId ? { ...note, note: noteText } : note
    );
    dispatch({ type: "SET_NOTES_ARR", payLoad: updatedNotesArr });
    dispatch({ type: "CLEAR_NOTE_TEXT" });
    handleClose();
  };
  return (
    <>
      <Modal
        open={show}
        onClose={handleClose}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <div
          className="bg-white rounded-lg flex flex-col gap-4 justify-between w-64 h-64 p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <h1 className="font-bold text-lg text-center">
            {from === "edit" ? "Edit" : "Add"} Notes
          </h1>

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
