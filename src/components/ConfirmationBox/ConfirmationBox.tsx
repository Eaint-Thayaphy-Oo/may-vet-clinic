import * as React from "react";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { RxCross1 } from "react-icons/rx";
import styles from "./ConfirmationBox.module.css";
import { IconButton } from "@mui/material";

interface ConfirmationBoxProps {
  open: boolean;
  handleCloseDelete: () => void;
  remove: (id: number) => void;
  id: number;
}

const ConfirmationBox: React.FC<ConfirmationBoxProps> = ({
  open,
  handleCloseDelete,
  remove,
  id,
}) => {
  return (
    <>
      <DialogTitle
        style={{
          color: "#54BAB9",
          fontSize: "14px",
          font: "Poppins",
          fontWeight: "bold",
        }}
      >
        Confirmation{" "}
        <IconButton
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
          }}
          onClick={handleCloseDelete}
        >
          <RxCross1 />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          style={{ fontSize: "14px", font: "Poppins", fontWeight: "regular" }}
        >
          Are you sure you want to delete this patient?
        </DialogContentText>
      </DialogContent>
      <DialogActions style={{ marginRight: "60px" }}>
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#CD211D",
            width: "100px",
            "&:hover": {
              backgroundColor: "#CD211D",
            },
          }}
          onClick={() => remove(id)}
        >
          Delete
        </Button>
        <Button variant="outlined" onClick={handleCloseDelete}>
          Cancel
        </Button>
      </DialogActions>
    </>
  );
};

export default ConfirmationBox;
