import React from "react";
import Cards from "../Cards/Cards";
import "./Servicios.scss";

const Servicios = () => {
  return (
    <div>
      <section
        id="sectionServicios"
        class="section_servicios wow animate__animated animate__fadeInLeft"
      />
      <hr id="serviciosHr" />
      <h2
        id="sectionServiciosTitle"
        class="h2 section_servicios_title wow animate__animated animate__fadeInLeft"
      >
        ¿CÓMO LO HACEMOS?
      </h2>
      <p class="section_servicios_paragraph">
        Contamos con tres servicios que se conectan y juntos, garantizan el
        proceso necesario para construir una marca sólida que destaque en el
        mercado y que te impulse para <span>ATRAER</span>, <span>CONECTAR</span>{" "}
        y <span>VENDER</span>.
      </p>{" "}
      <Cards />
    </div>
  );
};

export default Servicios;
