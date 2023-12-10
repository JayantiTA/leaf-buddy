import React, { createContext, useContext, useState } from "react";

const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  const [, setToastVisible] = useState(false);
  const [, setToastTitle] = useState("");

  const showToast = (title) => {
    setToastTitle(title);
    setToastVisible(true);
  };

  const hideToast = () => {
    setToastVisible(false);
  };

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
    </ToastContext.Provider>
  );
};

const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export { ToastProvider, useToast };
