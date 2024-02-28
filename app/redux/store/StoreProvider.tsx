"use client";
import { ReactNode } from "react";
import { store } from "./store";
import { Provider } from "react-redux";

type StoreProviderTypes = {
  children: ReactNode;
};

const StoreProvider = ({ children }: StoreProviderTypes) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
