import React from "react";

export const Card = () => {
  return (
    <div className="container_content_impulso">
      <div id="contenedorImagenImpulsoMarca" className="contenedor_impulso_img">
        <img
          loading="lazy"
          src="./assets/composiciones del logo/COHETE_ISOTIPO/PNG/COHETE_EN GRIS-12.png"
          alt="Impulsar - Imagen impulso"
          className="img_impulso"
        />
      </div>
      <div
        id="containerSpeachImpulsoMarca"
        className="container_impulso_speach"
      >
        <h3 className="h3 impulso_title">IMPULSO DE IDENTIDAD DE MARCA</h3>
        <p className="impulso_paragraph">
          Desarrollá la base sólida de tu marca y dale ese impulso para destacar
          en el mercado.
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
  );
};
