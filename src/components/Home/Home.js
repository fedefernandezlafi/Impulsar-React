import ServicioDestacado from "../Servicio Destacado/ServicioDestacado";
import Servicios from "../Servicios/Servicios";
import { Header } from "./Header/Header";

export const Home = () => {
  return (
    <>
      <Header />
      <Servicios />
      <ServicioDestacado />
    </>
  );
};
