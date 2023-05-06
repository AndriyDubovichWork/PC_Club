import { useRef, createContext, createRef } from 'react';

type RefContextT = {
  HeaderRef: React.MutableRefObject<null>;
  BookRef: React.MutableRefObject<null>;
  scrollToElement: (param: any) => void;
};
export const RefContext = createContext<RefContextT>({
  HeaderRef: createRef(),
  BookRef: createRef(),
  scrollToElement: (param: any) => {},
});
