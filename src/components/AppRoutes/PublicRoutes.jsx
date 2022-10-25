import { Nosotros } from "components/Nosotros/Nosotros";
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "../Home/Home";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};
