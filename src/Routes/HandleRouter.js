import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../views/Home/Home";

const HandleRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default HandleRouter;
