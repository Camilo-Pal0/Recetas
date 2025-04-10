import Verduras from './../assets/img/Verduras.jpg'
import RecetaCasera from './../assets/img/RecetaCasera.jpg'
import SalmonNaranja from './../assets/img/SalmonNaranja.jpg'
import PannaCota from './../assets/img/PannaCota.jpg'
import GalletasLimon from './../assets/img/GalletasLimon.jpg'
import Berenjena from './../assets/img/Berenjena.jpg'

export const SeccionRecientes = () => {
  return (
    <>
        <div className="max-w-6xl mb-4 mt-4 mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Columna izquierda */}
      <div>
        <h2 className="text-center font-bold text-lg border-b-3 border-orange-500 mb-4 pb-2">
          ÚLTIMAS RECETAS DE COCINA
        </h2>

        <div className="space-y-4">
          <div className="flex items-center gap-4 border-b pb-4">
            <img src={Verduras} alt="Sepia" className="w-24 h-24 object-cover rounded" />
            <p className="font-semibold text-sm">Sepia salteada con guisantes y verduras</p>
          </div>

          <div className="flex items-center gap-4 border-b pb-4">
            <img src={RecetaCasera} alt="Gildas" className="w-24 h-24 object-cover rounded" />
            <p className="font-semibold text-sm">Todo sobre la gilda y 7 recetas de gildas caseras</p>
          </div>

          <div className="flex items-center gap-4">
            <img src={SalmonNaranja} alt="Salmón" className="w-24 h-24 object-cover rounded" />
            <p className="font-semibold text-sm">Salmón a la naranja (o mandarina)</p>
          </div>
        </div>
      </div>

      {/* Columna derecha */}
      <div>
        <h2 className="text-center font-bold text-lg border-b-3 border-orange-500 mb-4 pb-2">
          LO MÁS VISTO
        </h2>

        <div className="space-y-4">
          <div className="flex items-center gap-4 border-b pb-4">
            <img src={GalletasLimon} alt="Galletas" className="w-24 h-24 object-cover rounded" />
            <p className="font-semibold text-sm">Cómo hacer galletas de limón caseras</p>
          </div>

          <div className="flex items-center gap-4 border-b pb-4">
            <img src={Berenjena} alt="Berenjenas" className="w-24 h-24 object-cover rounded" />
            <p className="font-semibold text-sm">Cómo hacer berenjenas rellenas de carne al horno fáciles y deliciosas</p>
          </div>

          <div className="flex items-center gap-4">
            <img src={PannaCota} alt="Panna Cotta" className="w-24 h-24 object-cover rounded" />
            <p className="font-semibold text-sm">Cómo hacer Panna Cotta italiana, la receta original</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
