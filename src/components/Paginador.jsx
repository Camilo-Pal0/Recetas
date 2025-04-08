import React from 'react'

export const Paginador = () => {
  return (
    <>
        <ul className='flex flex-row gap-2'>
            <li className='border border-gray-300 rounded-lg px-2 transition-all duration-300 ease-in-out transform hover:border-pink-400 hover:text-pink-400 cursor-pointer'><i class="fa-solid fa-angle-left"></i></li>
            <li className='border border-gray-300 rounded-lg px-2 transition-all duration-300 ease-in-out transform hover:border-pink-400 hover:text-pink-400 cursor-pointer'>1</li>
            <li className='border border-gray-300 rounded-lg px-2 transition-all duration-300 ease-in-out transform hover:border-pink-400 hover:text-pink-400 cursor-pointer'>2</li>
            <li className='border border-gray-300 rounded-lg px-2 transition-all duration-300 ease-in-out transform hover:border-pink-400 hover:text-pink-400 cursor-pointer'>3</li>
            <li className='border border-gray-300 rounded-lg px-2 transition-all duration-300 ease-in-out transform hover:border-pink-400 hover:text-pink-400 cursor-pointer'><i class="fa-solid fa-angle-right"></i></li>
        </ul>
    </>
  )
}
