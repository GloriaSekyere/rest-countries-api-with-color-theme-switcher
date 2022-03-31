import { createContext } from "react";

export const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
  return (
    <ModeContext.Provider value={{color: 'blue'}}>
      {children}
    </ModeContext.Provider>
  )
}