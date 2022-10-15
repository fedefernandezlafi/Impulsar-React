import React from "react";
import "../Cards/Cards.scss";

const Cards = () => {
  return (
    <div>
      <article class="cardsImpulsos_container" />
      <div
        id="impulsoMarca"
        class="container_content_impulso wow animate__animated animate__fadeInLeft delay-1"
      >
        <div id="contenedorImagenImpulsoMarca" class="contenedor_impulso_img">
          <img
            loading="lazy"
            src="./assets/composiciones del logo/COHETE_ISOTIPO/PNG/COHETE_EN GRIS-12.png"
            alt="Impulsar - Impulso Identidad de Marca"
            class="img_impulso"
          />
        </div>
        <div id="containerSpeachImpulsoMarca" class="container_impulso_speach">
          <h3 class=" h3 impulso_title">IMPULSO DE IDENTIDAD DE MARCA</h3>
          <p class="impulso_paragraph">
            Desarrollá la base sólida de tu marca y dale ese impulso para
            destacar en el mercado.
          </p>
        </div>
        <div class="contenedor_btns">
          <div class="contenedor_btn_pulse btn_impulsos">
            <a href="./pages/marca.html" class="btn_pulse">
              Más detalles
            </a>
          </div>
        </div>
      </div>{" "}
      ;
    </div>
  );
};

export default Cards;
