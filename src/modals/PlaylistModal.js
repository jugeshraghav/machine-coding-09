import { useData } from "../index";
import { CgPlayListAdd } from "react-icons/cg";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button, Modal } from "@mui/material";

export const PlaylistModal = () => {
  const { state } = useData();
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);
  const handleOpen = () => {
    setShowPlaylistModal(true);
  };
  const handleClose = () => {
    setShowPlaylistModal(false);
  };

  const location = useLocation();

  //handlers

  const addPlaylistHandler = () => {};
  return (
    <>
      {location?.pathname === "/playlist" ? (
        <AiOutlinePlusCircle onClick={() => handleOpen()} className="text-xl" />
      ) : (
        <CgPlayListAdd onClick={() => handleOpen()} className="text-lg" />
      )}

      <Modal
        open={showPlaylistModal}
        onClose={handleClose}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <div
          className="bg-white rounded-lg flex flex-col gap-4 justify-between w-64 h-64 p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <h1 className="font-bold text-lg text-center">Add Playlist</h1>

          <input
            name="name"
            placeholder="Playlist Name"
            className="border p-2"
          />
          <input
            name="description"
            placeholder="Description"
            className="border p-2"
          />
          <Button variant="contained" size="small">
            Create New PlayList
          </Button>
        </div>
      </Modal>
    </>
  );
};
