import React from 'react';
import ButtonC from '@mui/material/Button';

type ButtonT = {
  fullWidth?: boolean;
  onClick?: () => void;
  children: string | any;
};

const Button = ({ fullWidth = false, children, onClick }: ButtonT) => {
  return (
    <ButtonC
      onClick={onClick}
      variant='contained'
      sx={{
        width: fullWidth ? '100%' : 'auto',
        padding: '2vh 2vw',
        backgroundColor: '#ff4d30',
        '&:hover': {
          backgroundColor: '#ff4d30',
        },
      }}
    >
      {children}
    </ButtonC>
  );
};

export default Button;
