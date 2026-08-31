"use client";
import useBodyStyleLogic from "@/_hooks/utility/useBodyStyle";
import React, { createContext, ReactNode, useContext } from "react";
import { NavigationButtonProps } from "@/_types/interfaces/NavigationButtonProps";

interface IBodyStyleProvider {
  bodyStyle: React.CSSProperties;
  handleBodyStyle: (name: string) => void;
  childStates: NavigationButtonProps[];
  isChildActive: (name: string) => boolean;
}

const BodyStyleContext = createContext<IBodyStyleProvider | undefined>(
  undefined,
);

export const useBodyStyle = () => {
  const context = useContext(BodyStyleContext);

  if (!context) {
    throw new Error("useBodyStyle must be used within a BodyStyleProvider");
  }

  return context;
};

const BodyStyleProvider = ({ children }: { children: ReactNode }) => {
  const { bodyStyle, handleBodyStyle, childStates, isChildActive } =
    useBodyStyleLogic();

  return (
    <BodyStyleContext.Provider
      value={{
        bodyStyle,
        childStates,
        handleBodyStyle,
        isChildActive,
      }}
    >
      {children}
    </BodyStyleContext.Provider>
  );
};

export default BodyStyleProvider;
