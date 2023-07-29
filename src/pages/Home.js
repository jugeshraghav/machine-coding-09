import { useState } from "react";
import { useData } from "../index";
import { Box, Button, Modal, Typography } from "@mui/material";

export const Home = () => {
  const { state } = useData();

  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <h1>Home {state?.name}</h1>
      <Button
        color="success"
        variant="contained"
        onClick={() => setOpenModal(true)}
      >
        Open modal
      </Button>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            width: 300,
            backgroundColor: "red",
            color: "white",
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
        >
          <Typography variant="h6"> Heading</Typography>
          <Typography variant="p">Paragraph</Typography>
        </Box>
      </Modal>
    </>
  );
};
