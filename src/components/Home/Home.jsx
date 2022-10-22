import { CarouselServices } from "components/CarouselServices/CarouselServices";
import { Contacto } from "components/Contacto/Contacto";
import Servicios from "../Servicios/Servicios";
import { Header } from "./Header/Header";

export const Home = () => {
  return (
    <>
      <Header />
      <Servicios />
      <CarouselServices />
      <Contacto />
    </>
  );
};
