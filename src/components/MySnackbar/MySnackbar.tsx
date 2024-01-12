import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert, Stack } from "@mui/material";

interface SnackbarProps {
  message: string;
  open: boolean;
  autoHideDuration: number;
}

const MySnackbar: React.FC<SnackbarProps> = ({ message, open }) => {
  const [alert, setAlert] = useState<boolean>(true);

  const handleCloseAlert = () => {
    setAlert(false);
  };
  return (
    <Stack>
      {alert && (
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleCloseAlert}
        >
          <Alert
            onClose={handleCloseAlert}
            variant="filled"
            severity="success"
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        </Snackbar>
      )}
    </Stack>
  );
};

export default MySnackbar;
