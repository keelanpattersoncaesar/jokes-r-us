import React from "react";
import JokesHeader from "../components/JokesHeader";
import JokesBody from "../components/JokesBody";

export const SingleView = () => {
  return (
    <div className="relative bg-[#1982C4] min-h-screen">
      <JokesHeader />
      <JokesBody />
    </div>
  );
};
