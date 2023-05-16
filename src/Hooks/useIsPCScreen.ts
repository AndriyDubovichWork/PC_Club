import { useEffect, useState } from 'react';

const useIsPCScreen = () => {
  type resT = { isPC: boolean; textAlign: 'start' | 'center' };

  const [windowWidth, setWindowWidth] = useState(window.screen.width);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.screen.width);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.screen.width]);

  let res: resT = {
    isPC: windowWidth > 720 ? true : false,
    textAlign: windowWidth > 720 ? 'start' : 'center',
  };
  return res;
};
export default useIsPCScreen;
