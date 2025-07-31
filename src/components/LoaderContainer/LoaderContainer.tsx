import React from "react";
import { useSelector } from "react-redux";
import { Loader } from "../Loader/Loader";
import { RootState } from "<@>/redux/store";

export const LoaderContainer: React.FC = () => {
  const visible = useSelector((state: RootState) => state.loader.visible);
  return <>{visible && <Loader />}</>;
};
