import React from 'react'

export const MiniCards = ({imagen, titulo, opinion}) => {
  return (
    <>
        <div>
                <figure className='w-full h-[320px] mt-6 overflow-hidden'>
                    <img src={imagen} alt="Receta número 1" className='w-full h-full object-cover bg-no-repeat bg-center rounded-xl'/>
                </figure>
                <div className='text-center'>
                    <p className='text-pink-400 font-bold text-xl m-3 hover:underline cursor-pointer'>{titulo}</p>
                    <div className='text-xl text-yellow-400'>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <p className='text-base m-3'>Basado en <span className='font-bold'>{opinion}</span> opiniones</p>
                </div>
            </div>
    </>
  )
} 
