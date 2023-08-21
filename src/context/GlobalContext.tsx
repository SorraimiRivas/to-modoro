import React, { createContext, useContext, useState } from "react";

type GlobalContextType = {
  focusTime: number;
  breakTime: number;
  setFocusTime: (time: number) => void;
  setBreakTime: (time: number) => void;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [focusTime, setFocusTime] = useState<number>(25);
  const [breakTime, setBreakTime] = useState<number>(5);

  return (
    <GlobalContext.Provider
      value={{ focusTime, breakTime, setFocusTime, setBreakTime }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
