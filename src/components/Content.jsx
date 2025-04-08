import React from 'react'
import Receta1 from './../assets/img/Receta1.jpg'


export const Content = () => {
  return (
<>
    <h2 className='text-4xl font-extrabold text-center text-pink-400'>Palo Cocking - Recetas Fáciles</h2>
    <div>
        <figure className='w-full h-[600px] mt-6 overflow-hidden'>
            <img src={Receta1} alt="Receta número 1" className='w-full h-full object-cover bg-no-repeat bg-center rounded-xl'/>
        </figure>
        <div className='text-center'>
            <p className='text-pink-400 font-bold text-2xl m-5 hover:underline cursor-pointer'>Pancakes con queso mozarella</p>
            <div className='text-2xl text-yellow-400'>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
            <p className='text-xl m-5'>Basado en <span className='font-bold'>1</span> opiniones</p>
        </div>
    </div>
</>
  )
}
