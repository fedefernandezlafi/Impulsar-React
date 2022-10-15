import './scss/background.scss'
import './scss/chevron.scss'
import './scss/presentation.scss'
import { SwiperHeader } from './SwiperHeader'

export const Header = () =>{
    return(
        <header>
                <div class="background"></div>
                <section id="sectionPresentacion" class="section_presentacion">
                    <article id="contenedorPresentacion" class="contenedor_presentacion">
                        <div class="containerCarouselButton">
                            <SwiperHeader/>
                        <div class="container_btn_presentacion">
                            <a href="#sectionServicios" class="btn_presentacion">DESCUBRIR</a>          
                        </div>
                        </div>
                        <div id="contenedorAnimationChevron" class="contenedor_animationChevron">
                        <a href="#sectionServicios" class="container_chevron">
                            <div class="chevron"></div>
                            <div class="chevron"></div>
                            <div class="chevron"></div>
                        </a>
                        </div>
                    </article>
                </section>
        </header>
    )
}