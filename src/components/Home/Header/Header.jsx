import "./scss/background.scss";
import "./scss/chevron.scss";
import "./scss/presentation.scss";
import { SwiperHeader } from "./SwiperHeader";
import { Link as LinkScroll } from "react-scroll";

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
              <LinkScroll
                to="sectionServicios"
                offset={-50}
                duration={500}
                className="btn_presentacion"
              >
                DESCUBRIR
            </LinkScroll>
            </div>
          </div>
          <div
            id="contenedorAnimationChevron"
            className="contenedor_animationChevron"
          >
            <LinkScroll
                to="sectionServicios"
                offset={-50}
                duration={500}
                className="container_chevron"
              >
              <div className="chevron"></div>
              <div className="chevron"></div>
              <div className="chevron"></div>
            </LinkScroll>
          </div>
        </article>
      </section>
    </header>
  );
};
