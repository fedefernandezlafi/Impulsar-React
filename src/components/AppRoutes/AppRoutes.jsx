import { BrowserRouter } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { PublicRoutes } from "./PublicRoutes";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <PublicRoutes />
      <Footer />
    </BrowserRouter>
  );
};

