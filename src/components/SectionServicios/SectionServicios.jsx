import React from "react";
import Cards from "../Cards/Cards";
import "./SectionServicios.scss";
import { useCards } from "./useCards";

const SectionServicios = () => {
  const { cards } = useCards();

  return (
    <section
      id="sectionServicios"
      className="section__services wow animate__animated animate__fadeInLeft"
    >
      <h2
        id="sectionServiciosTitle"
        className="h2 section_servicios_title wow animate__animated animate__fadeInLeft"
      >
        NUESTROS SERVICIOS
      </h2>
      <p className="section_servicios_paragraph">
        Contamos con tres servicios que se conectan y juntos, garantizan el
        proceso necesario para construir una marca sólida que destaque en el
        mercado y que te impulse para <span>ATRAER</span>, <span>CONECTAR</span>{" "}
        y <span>VENDER</span>.
      </p>
      <Cards cards={cards} />
    </section>
  );
};

export default SectionServicios;
