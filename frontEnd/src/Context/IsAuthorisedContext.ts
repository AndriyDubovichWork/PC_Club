import { useRef, createContext, createRef } from 'react';

type IsAuthorisedContextT = {
  isAuthorised: boolean;
  setIsAuthorised: (value: boolean) => void;
};
export const IsAuthorisedContext = createContext<IsAuthorisedContextT>({
  isAuthorised: false,
  setIsAuthorised: () => {},
});
