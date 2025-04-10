import Spaguettis from './../assets/img/Spaguettis.jpg'
import Carne from './../assets/img/Carne.jpg'
import Ensalada from './../assets/img/Ensadala.jpg'

export const GaleriaImagenes = () => {
  return (
    <>
  <div className="max-w-[1020px] mx-auto">
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full h-auto sm:max-h-[400px] mb-6">
    {/* Imagen principal grande */}
    <div className="relative rounded overflow-hidden sm:col-span-2">
      <img src={Spaguettis} alt="" className="w-full h-full object-cover max-h-[400px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 p-4 text-white font-semibold z-10 text-sm sm:text-base">
        CÓMO HACER ESPAGUETIS AL PESTO
      </div>
    </div>

    {/* Columna derecha */}
    <div className="grid grid-cols-2 sm:grid-cols-1 gap-2">
      {/* Imagen superior */}
      <div className="relative rounded overflow-hidden">
        <img src={Carne} alt="" className="w-full h-full object-cover max-h-[200px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 p-2 text-white text-xs sm:text-sm font-semibold z-10">
          BRÓCOLI A LA CREMA CON PATATAS
        </div>
      </div>

      {/* Imagen inferior */}
      <div className="relative rounded overflow-hidden">
        <img src={Ensalada} alt="" className="w-full h-full object-cover max-h-[200px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 p-2 text-white text-xs sm:text-sm font-semibold z-10">
          RISOTTO DE TOMATE CON MOZZARELLA
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}
