"use client";

import React from "react";
import { LoaderContainer } from "<@>/components/LoaderContainer/LoaderContainer";

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="layout-content">{children}</main>
      <LoaderContainer />
    </>
  );
}
