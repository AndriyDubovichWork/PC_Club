import { Dialog, DialogContent } from '@mui/material';
import React from 'react';
import style from './BookDialog.module.scss';
import PresonalInformation from './PresonalInformation/PresonalInformation';
import dayjs from 'dayjs';
type BookDialogPropsT = {
  bookData: {
    date: string;
    GPU: string;
    CPU: string;
    From: string;
    Until: string;
  };
  isDialogOpen: boolean;
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSnackbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const BookDialog = ({
  bookData,
  isDialogOpen,
  setIsDialogOpen,
  setIsSnackbarOpen,
}: BookDialogPropsT) => {
  return (
    <Dialog
      onClose={() => setIsDialogOpen(false)}
      open={isDialogOpen}
      className={style.BookDialog}
      maxWidth={'md'}
      fullWidth
    >
      <DialogContent>
        <h1 className={style.Title}>Info About Booking</h1>

        <div className={style.Details}>
          {Object.keys(bookData).map((BookKey: string, id: number) => {
            const key = BookKey as keyof typeof bookData;
            return (
              <div key={bookData[key] + id} className={style.Element}>
                <span className={style.Key}>{key}:</span>
                <span className={style.Data}>{bookData[key]}</span>
              </div>
            );
          })}
        </div>
        <PresonalInformation
          setIsDialogOpen={setIsDialogOpen}
          setIsSnackbarOpen={setIsSnackbarOpen}
        />
      </DialogContent>
    </Dialog>
  );
};

export default BookDialog;
