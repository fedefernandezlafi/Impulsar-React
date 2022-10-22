import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper';
//import '../../../../node_modules/swiper/swiper-bundle.css';
import 'swiper/css'

export const SwiperHeader = () =>{
    return(
        <Swiper
            modules={ [Autoplay] } 
            id='presentation' 
            className='swiper carouselPresentacion' 
            tag='ul'
            direction= {"vertical"}
            spaceBetween= {30}
            centeredSlides= {true}
            mousewheel = {false}
            autoplay= {{delay: 3000, disableOnInteraction:false}}
        >
            <SwiperSlide className='swiper-slide h1' tag='li'>IMPULSAMOS TU CAMINO DIGITAL</SwiperSlide>
            <SwiperSlide className='swiper-slide h1' tag='li'>DISEÑO DE IDENTIDAD DE MARCA</SwiperSlide>
            <SwiperSlide className='swiper-slide h1' tag='li'>DISEÑO GRÁFICO</SwiperSlide>
            <SwiperSlide className='swiper-slide h1' tag='li'>DESARROLLO DE PÁGINAS WEB</SwiperSlide>
            <SwiperSlide className='swiper-slide h1' tag='li'>MARKETING DIGITAL</SwiperSlide>
            <SwiperSlide className='swiper-slide h1' tag='li'>REGISTRO DE MARCAS</SwiperSlide>
            <SwiperSlide className='swiper-slide h1' tag='li'>DISEÑO DE MODELO DE NEGOCIOS</SwiperSlide>
            <SwiperSlide className='swiper-slide h1' tag='li'>REDES SOCIALES</SwiperSlide>
            <SwiperSlide className='swiper-slide h1' tag='li'>ASESORAMIENTO EMPRESARIAL</SwiperSlide>
            <SwiperSlide className='swiper-slide h1' tag='li'>RECURSOS HUMANOS</SwiperSlide>
        </Swiper>
    )
}

