import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../views/Home/home";
import Contact from "../views/contact/contact";
import About from "../views/about/About";

const HandleRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact/" element={<Contact />} />
        <Route path="about/" element={<About />} />
      </Routes>
    </>
  );
};

export default HandleRouter;
