import { useRef, createContext, createRef } from 'react';

type RefContextT = {
  GreetingRef: React.MutableRefObject<null>;
  BookRef: React.MutableRefObject<null>;
  scrollToElement: (param: any) => void;
};
export const RefContext = createContext<RefContextT>({
  GreetingRef: createRef(),
  BookRef: createRef(),
  scrollToElement: (param: any) => {},
});
