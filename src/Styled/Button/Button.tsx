import React from 'react';
import ButtonC from '@mui/material/Button';

type ButtonT = {
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
  children: string | any;
};

const Button = ({
  fullWidth = false,
  children,
  onClick,
  className,
}: ButtonT) => {
  return (
    <ButtonC
      className={className}
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
