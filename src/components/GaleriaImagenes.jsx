import Spaguettis from './../assets/img/Spaguettis.jpg'
import Carne from './../assets/img/Carne.jpg'
import Ensalada from './../assets/img/Ensadala.jpg'

export const GaleriaImagenes = () => {
  return (
    <>
       <div className="grid grid-cols-3 gap-2 w-full h-[400px] mb-6">
      {/* Imagen principal grande */}
      <div className="col-span-2 relative rounded overflow-hidden">
        <img src={Spaguettis} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4 text-white font-semibold z-10">
          Cómo hacer berenjenas rellenas de carne al horno fáciles y deliciosas
        </div>
      </div>

      {/* Columna derecha */}
      <div className="flex flex-col gap-2 h-full">
        {/* Imagen superior */}
        <div className="relative flex-1 rounded overflow-hidden">
          <img src={Carne} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-2 text-white text-sm font-semibold z-10">
            Cómo hacer Panna Cotta italiana, la receta original
          </div>
        </div>

        {/* Imagen inferior */}
        <div className="relative flex-1 rounded overflow-hidden">
          <img src={Ensalada} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-2 text-white text-sm font-semibold z-10">
            Cómo hacer galletas de limón caseras
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
