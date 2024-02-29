"use client";

import { createContext, useContext } from "react";

export type ModalContext = {
  modalElement: React.ReactElement | null;
  open: (modalElement: React.ReactElement) => void;
  close: () => void;
};

const initialValue: ModalContext = {
  modalElement: null,
  open: () => {},
  close: () => {},
};

export const ModalContext = createContext(initialValue);

export const useModal = () => useContext(ModalContext);