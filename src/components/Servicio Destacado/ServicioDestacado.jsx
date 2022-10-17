import React from "react";
import { Card } from "../Cards/Card/Card";
import "./ServicioDestacado.scss";

const ServicioDestacado = () => {
  return (
    <article class="caminoDigital_container" id="caminoDigitalContainer">
      <h2
        id="sectionServiciosTitle"
        class="h2 section_servicios_title wow animate__animated animate__fadeInLeft"
      >
        ¡CONECTÁ LOS TRES IMPULSOS EN UN ÚNICO CAMINO DIGITAL!
      </h2>
      <Card />
    </article>
  );
};

export default ServicioDestacado;
