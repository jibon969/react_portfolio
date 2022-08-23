import React from "react";
import { Route, Routes } from "react-router-dom";
import home from "../views/home/home";
import about from "../views/about/about";

const HandleRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<home />} />
        <Route path="/about" element={<about />} />
      </Routes>
    </>
  );
};

export default HandleRouter;
