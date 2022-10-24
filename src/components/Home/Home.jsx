import { CarouselServices } from "components/CarouselServices/CarouselServices";
import { SectionContacto } from "components/SectionContacto/SectionContacto";
import SectionServicios from "../SectionServicios/SectionServicios";
import { Header } from "./Header/Header";

export const Home = () => {
  return (
    <>
      <Header />
      <SectionServicios />
      <CarouselServices />
      <SectionContacto />
    </>
  );
};
