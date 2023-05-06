import { Dialog } from '@mui/material';
import React from 'react';

type BookDialogPropsT = {
  isDialogOpen: boolean;
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const BookDialog = ({ isDialogOpen, setIsDialogOpen }: BookDialogPropsT) => {
  return (
    <Dialog onClose={() => setIsDialogOpen(false)} open={isDialogOpen}>
      BookDialog
    </Dialog>
  );
};

export default BookDialog;
