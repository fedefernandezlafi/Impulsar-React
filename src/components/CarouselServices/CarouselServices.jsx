import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { EffectCoverflow, Pagination , Navigation} from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
/* ------ icon ------- */
import { MdTouchApp } from "react-icons/md";

/* ----- customs ----- */
import './CarouselServices.scss'

export const CarouselServices = () =>{
    return(
        <article className='article__carousel__Services'>
            <h3 class="h3 carousel_title ">MÁS SERVICIOS</h3>
            <Swiper
                id='cards'
                className='swiper carousel__Services'
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                navigation={true}
                modules={[EffectCoverflow, Pagination]}            
            >
                <SwiperSlide id="card" className="swiper-slide card">
                    <div className="dp">
                        <h3 className="card_title">IMPULSO DE REDES</h3>
                        <MdTouchApp className='touch'/>
                    </div>
                    <div className="card_content">
                        <p className="card_paragraph">
                        ¡Hace que te vean! Las redes sociales son la vía de contacto más utilizada, por lo que es importante hacer un buen uso de ellas. ¡Entérate cómo!                           </p>
                        <div className="contenedor_btn_card">
                            <a href="https://api.whatsapp.com/send?phone=5492616307131" target="_blank" className="btn_card">Consultar</a>          
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide id="card" className="swiper-slide card">
                    <div className="dp">
                        <h3 className="card_title">IMPULSO LEGAL</h3>
                        <MdTouchApp className='touch'/>
                    </div>
                    <div className="card_content">
                        <p className="card_paragraph">
                        ¿Sabías que podes proteger tu emprendimiento? Realizamos registros de dominios, patentes y marcas. Asesórate para aprovechar lo legal a tu favor.
                        </p>
                        <div className="contenedor_btn_card">
                            <a href="https://api.whatsapp.com/send?phone=5492616307131" target="_blank" className="btn_card">Consultar</a>          
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide id="card" className="swiper-slide card">
                    <div className="dp">
                        <h3 className="card_title">IMPULSO DE MARKETING</h3>
                        <MdTouchApp className='touch'/>
                    </div>
                    <div className="card_content">
                        <p className="card_paragraph">
                        La tecnología nos brinda muchas herramientas. Entérate cómo las diferentes plataformas de Google, Instagram, Facebook, YouTube y Twitter pueden beneficiarte.
                        </p>
                        <div className="contenedor_btn_card">
                            <a href="https://api.whatsapp.com/send?phone=5492616307131" target="_blank" className="btn_card">Consultar</a>          
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide id="card" className="swiper-slide card">
                    <div className="dp">
                        <h3 className="card_title">IMPULSO DE DISEÑO GRÁFICO</h3>
                        <MdTouchApp className='touch'/>
                    </div>
                    <div className="card_content">
                        <p className="card_paragraph">
                        El universo gráfico de tu marca de la mano de folletería, papelería, merchandising, publicidad, manual de estilos y mucho más. Elegí impreso y/o digital.
                        </p>
                        <div className="contenedor_btn_card">
                            <a href="https://api.whatsapp.com/send?phone=5492616307131" target="_blank" className="btn_card">Consultar</a>          
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide id="card" className="swiper-slide card">
                    <div className="dp">
                        <h3 className="card_title">IMPULSO FOTOGRÁFICO</h3>
                        <MdTouchApp className='touch'/>
                    </div>
                    <div className="card_content">
                        <p className="card_paragraph">
                        Fotografía profesional para impulsar tu web, redes sociales y marketing.
                        </p>
                        <div className="contenedor_btn_card">
                            <a href="https://api.whatsapp.com/send?phone=5492616307131" target="_blank" className="btn_card">Consultar</a>          
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </article>

    )
}