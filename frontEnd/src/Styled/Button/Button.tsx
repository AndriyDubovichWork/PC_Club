import React from 'react';
import ButtonC from '@mui/material/Button';

type ButtonT = {
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
  type?: 'submit';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: string | any;
};

const Button = ({
  fullWidth = false,
  children,
  onClick,
  type,
  className,
  disabled,
}: ButtonT) => {
  return (
    <ButtonC
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
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
