"use client";

import { AuthContext } from "@/contexts/auth.context";
import { ModalContext } from "@/contexts/modal.context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState } from "react";

const client = new QueryClient;

function ReactQueryProvider({children}:{children: React.ReactNode}) {
  return <QueryClientProvider client={ client }> { children } </QueryClientProvider>  
}

function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modalElement, setModalElement] =
    useState<ModalContext["modalElement"]>(null);

  const open: ModalContext["open"] = (modalElement) => {
    setModalElement(modalElement);
  };

  const close: ModalContext["close"] = () => setModalElement(null);

  const value: ModalContext = {
    modalElement,
    open,
    close,
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      {modalElement}
    </ModalContext.Provider>
  );
}

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthInitialized, setIsAuthInitialized] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");
  
  const value = {
    userId,
    setUserId,
    isLoggedIn,
    setIsLoggedIn,
    isAuthInitialized,
    setIsAuthInitialized,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}


export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <AuthProvider>
        <ModalProvider>{children}</ModalProvider>
      </AuthProvider>
    </ReactQueryProvider>);
}

