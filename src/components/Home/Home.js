import { CarouselServices } from "components/CarouselServices/CarouselServices";
import Servicios from "../Servicios/Servicios";
import { Header } from "./Header/Header";

export const Home = () => {
  return (
    <>
      <Header />
      <Servicios />
      <CarouselServices/>
    </>
  );
};
