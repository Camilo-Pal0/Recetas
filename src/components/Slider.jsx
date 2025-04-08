// src/components/Slider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Albondiga from './../assets/img/Albondigas.jpg';
import Sanwich from './../assets/img/Sanwich.jpg'
import Salmon from './../assets/img/Salmón.jpg'

import './../assets/css/Swiper.css'; // Asegúrate de tener estilos si los necesitas

export const Slider = () => {
  return (
    
    <div className='mt-5'>
        <div className="slider-container">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                className="mySwiper"
            >
                <SwiperSlide>
                <div
                    className="slide rounded-xl"
                    style={{ backgroundImage: `url(${Albondiga})` }}
                >
                    <div className="overlay">
                    <p className="category">RECETAS CON POLLO Y AVES</p>
                    <h2 className="title">ALBÓNDIGAS DE POLLO CON SALSA DE YOGUR</h2>
                    </div>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div
                    className="slide rounded-xl"
                    style={{ backgroundImage: `url(${Sanwich})` }}
                >
                    <div className="overlay">
                    <p className="category">SÁNDWICHES</p>
                    <h2 className="title">SÁNDWICH MONTECRISTO</h2>
                    </div>
                </div>
                </SwiperSlide>
                
                <SwiperSlide>
                <div
                    className="slide rounded-xl"
                    style={{ backgroundImage: `url(${Salmon})` }}
                >
                    <div className="overlay">
                    <p className="category">PESCADOS</p>
                    <h2 className="title">SALMÓN AL HORNO</h2>
                    </div>
                </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>

    
  );
};
