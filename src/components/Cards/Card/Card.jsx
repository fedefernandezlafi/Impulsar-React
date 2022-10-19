import React from "react";

export const Card = ({ card }) => {
  return (
    <div id={card.id} className="container_content_impulso">
      <div id="contenedorImagenImpulsoMarca" className="contenedor_impulso_img">
        <img
          loading="lazy"
          src="./assets/composiciones del logo/COHETE_ISOTIPO/PNG/COHETE_EN GRIS-12.png"
          alt="Impulsar - Imagen impulso"
          className="img_impulso"
        />
      </div>
      <div className="container_impulso_speach">
        <h3 className="h3 impulso_title"> {card.title} </h3>
        <p className="impulso_paragraph">{card.description}</p>
        {
          <p
            className="impulso_paragraph"
            style={{ display: !card.description2 ? "none" : "flex" }}
          >
            {card.description2}
          </p>
        }
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
