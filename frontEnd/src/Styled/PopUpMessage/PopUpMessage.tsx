import { Alert, Snackbar } from '@mui/material';
import React from 'react';

type PopUpMessagePropsT = {
  text: string;
  isSnackbarOpen: boolean;
  setIsSnackbarOpen: (value: boolean) => void;
};

const PopUpMessage = ({
  isSnackbarOpen,
  setIsSnackbarOpen,
  text,
}: PopUpMessagePropsT) => {
  return (
    <Snackbar
      open={isSnackbarOpen}
      autoHideDuration={6000}
      onClose={() => setIsSnackbarOpen(false)}
    >
      <Alert
        onClose={() => setIsSnackbarOpen(false)}
        severity='success'
        sx={{ width: '100%' }}
      >
        {text}
      </Alert>
    </Snackbar>
  );
};

export default PopUpMessage;
