import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert, Stack } from "@mui/material";

interface SnackbarProps {
  message: string;
  open: boolean;
  autoHideDuration: number;
  onClose: () => void;
}

const MySnackbar: React.FC<SnackbarProps> = ({ message, open, onClose }) => {
  return (
    <Stack>
      <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
        <Alert onClose={onClose} severity="success" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default MySnackbar;
