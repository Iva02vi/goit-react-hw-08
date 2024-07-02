import { Box, Modal, Typography } from "@mui/material";
import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import css from "./ModalDelete.module.css";

const ModalDelete = ({ isOpen, onClose, id }) => {
  const dispatch = useDispatch();
  const boxStyle = {
    width: "480px",
    padding: "24px",
    backgroundColor: "#ffe5b8",
    color: "#ad5d4e",
    borderRadius: "8px",
    textAlign: "center",
  };
  const buttonBoxStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "24px",
    marginTop: "32px",
  };

  const handleDelete = (id) => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success("Contact deleted");
      })
      .catch(() => {
        toast.error("Sorry, something went wrong");
      });
    onClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className={css.wrapper}
    >
      <Box sx={boxStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Are you sure you want to delete this contact?
        </Typography>
        <Typography id="modal-modal-description" sx={buttonBoxStyle}>
          <button
            className={css.button}
            type="button"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
          <button className={css.button} type="button" onClick={onClose}>
            Cancel
          </button>
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalDelete;
