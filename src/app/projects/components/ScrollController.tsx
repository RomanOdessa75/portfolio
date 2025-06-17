import React, { createContext, useContext, useState, ReactNode } from "react";

interface ScrollControllerContextType {
  isProgressActive: boolean;
  setIsProgressActive: (active: boolean) => void;
  progressValue: number;
  setProgressValue: (value: number) => void;
}

const ScrollControllerContext =
  createContext<ScrollControllerContextType | null>(null);

export const useScrollController = () => {
  const context = useContext(ScrollControllerContext);
  if (!context) {
    throw new Error(
      "useScrollController must be used within ScrollControllerProvider"
    );
  }
  return context;
};

interface ScrollControllerProviderProps {
  children: ReactNode;
}

export const ScrollControllerProvider: React.FC<
  ScrollControllerProviderProps
> = ({ children }) => {
  const [isProgressActive, setIsProgressActive] = useState(false);
  const [progressValue, setProgressValue] = useState(0);

  return (
    <ScrollControllerContext.Provider
      value={{
        isProgressActive,
        setIsProgressActive,
        progressValue,
        setProgressValue,
      }}
    >
      {children}
    </ScrollControllerContext.Provider>
  );
};
