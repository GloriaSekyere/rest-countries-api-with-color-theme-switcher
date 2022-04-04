import { createContext, useState } from "react";

export const ModeContext = createContext();

if (localStorage.getItem("MODE") === null) {
  localStorage.setItem("MODE", 'light')
}

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState(localStorage.getItem("MODE"))

  const toggleMode = () => {
    localStorage.setItem("MODE", mode === 'light' ? 'dark' : 'light');
    setMode(localStorage.getItem("MODE"))
  }

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  )
}