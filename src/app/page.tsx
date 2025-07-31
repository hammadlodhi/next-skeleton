"use client";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { showLoader, hideLoader } from "<@>/redux/loaderSlice";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showLoader());

    const timer = setTimeout(() => {
      dispatch(hideLoader());
    }, 2000); 

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
