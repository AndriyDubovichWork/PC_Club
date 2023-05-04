import React from 'react';
import { Box, Zoom, Fab } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import useScrollTrigger from '@mui/material/useScrollTrigger';

const ScrollTop = ({ className }: { className: string }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Zoom in={trigger}>
      <Box
        role='presentation'
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 1,
        }}
      >
        <Fab
          onClick={() => scrollToTop()}
          sx={{
            backgroundColor: '#ff4d30',
            '&:hover': {
              backgroundColor: '#ff4d30',
            },
          }}
          size='small'
          aria-label='scroll back to top'
        >
          <KeyboardArrowUp
            sx={{
              color: '#fff',
              '&:hover': {
                color: '#fff',
              },
            }}
          />
        </Fab>
      </Box>
    </Zoom>
  );
};

export default ScrollTop;
