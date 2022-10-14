import './scss/background.scss'
import './scss/presentation.scss'
import './scss/chevron.scss'

export const Header = () =>{
    return(
        <header>
                <div class="background"></div>
                <section id="sectionPresentacion" class="section_presentacion">
                    <article id="contenedorPresentacion" class="contenedor_presentacion">
                        <div class="containerCarouselButton">
                        <div class="swiper mySwiper carouselPresentacion">
                            <div class="swiper-wrapper carouselPresentacion_content">
                            <div class="swiper-slide h1">IMPULSAMOS TU CAMINO DIGITAL</div>
                            <div class="swiper-slide h1">DISEÑO DE IDENTIDAD DE MARCA</div>
                            <div class="swiper-slide h1">DISEÑO GRÁFICO</div>
                            <div class="swiper-slide h1">DESARROLLO DE PÁGINAS WEB</div>
                            <div class="swiper-slide h1">MARKETING DIGITAL</div>
                            <div class="swiper-slide h1">REGISTRO DE MARCAS</div>
                            <div class="swiper-slide h1">DISEÑO DE MODELO DE NEGOCIOS</div>
                            <div class="swiper-slide h1">REDES SOCIALES</div>
                            <div class="swiper-slide h1">ASESORAMIENTO EMPRESARIAL</div>
                            </div>
                        </div>
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