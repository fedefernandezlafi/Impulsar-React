import "./scss/background.scss";
import "./scss/chevron.scss";
import "./scss/presentation.scss";
import { SwiperHeader } from "./SwiperHeader";

export const Header = () => {
  return (
    <header id="header">
      <div className="background"></div>
      <section id="sectionPresentacion" className="section_presentacion">
        <article
          id="contenedorPresentacion"
          className="contenedor_presentacion"
        >
          <div className="containerCarouselButton">
            <SwiperHeader />
            <div className="container_btn_presentacion">
              <a href="#sectionServicios" className="btn_presentacion">
                DESCUBRIR
              </a>
            </div>
          </div>
          <div
            id="contenedorAnimationChevron"
            className="contenedor_animationChevron"
          >
            <a href="#sectionServicios" className="container_chevron">
              <div className="chevron"></div>
              <div className="chevron"></div>
              <div className="chevron"></div>
            </a>
          </div>
        </article>
      </section>
    </header>
  );
};
