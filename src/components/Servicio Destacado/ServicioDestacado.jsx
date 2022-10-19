import React from "react";
import "./ServicioDestacado.scss";

const ServicioDestacado = () => {
  return (
    <article className="caminoDigital_container" id="caminoDigitalContainer">
      <h2
        id="sectionServiciosTitle"
        className="h2 wow animate__animated animate__fadeInLeft"
      >
        ¡CONECTÁ LOS TRES IMPULSOS EN UN ÚNICO CAMINO DIGITAL!
      </h2>
      <div className="container_content_caminoDigital">
        <div
          id="contenedorImagenImpulsoMarca"
          className="contenedor_impulso_img"
        >
          <img
            loading="lazy"
            src="./assets/composiciones del logo/COHETE_ISOTIPO/PNG/COHETE_EN GRIS-12.png"
            alt="Impulsar - Imagen impulso"
            className="img_impulso"
          />
        </div>
        <div className="caminoDigital_container_speach">
          <h3 className="h3 impulso_title"> PACK CAMINO DIGITAL </h3>
          <p className="impulso_paragraph">
            Este pack contiene los impulsos de Identidad de Marca, Identidad
            Visual e Impulso Web, a un precio increíble y con facilidades a tu
            medida. Impulsar constituye las bases sólidas de tu emprendimiento,
            una estética visual de primer nivel, una página web adaptada a tus
            necesidades e intereses, y un conjunto de herramientas que permitirá
            posicionar tu marca en el mercado.
          </p>
        </div>
        <div className="contenedor_btns">
          <div className="contenedor_btn_pulse btn_impulsos">
            <a href="./pages/marca.html" className="btn_pulse">
              Más detalles
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ServicioDestacado;
