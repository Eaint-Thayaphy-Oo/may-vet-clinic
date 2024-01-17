import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert, Stack } from "@mui/material";

interface SnackbarProps {
  message: string;
  open: boolean;
  autoHideDuration: number;
  onClose: () => void;
}

const MySnackbar: React.FC<SnackbarProps> = ({
  message,
  open,
  autoHideDuration,
  onClose,
}) => {
  const [alert, setAlert] = useState<boolean>(true);

  return (
    <Stack>
      {alert && (
        <Snackbar
          open={open}
          autoHideDuration={autoHideDuration}
          onClose={onClose}
        >
          <Alert
            onClose={onClose}
            variant="filled"
            severity="success"
            sx={{
              width: "100%",
              fontFamily: "Poppins",
              fontSize: "14px",
              fontWeight: "regular",
              color: "#ffffff",
              backgroundColor: "#1AB45D",
            }}
          >
            {message}
          </Alert>
        </Snackbar>
      )}
    </Stack>
  );
};

export default MySnackbar;
