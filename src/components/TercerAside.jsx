import { TercerEnlacesAside } from "./TercerEnlacesAside"

export const TercerAside = ({titulo}) => {
  return (
    <>
        <div className="bg-gray-800 text-white p-2 mb-4 font-black rounded-lg">{titulo} </div>
        
        {/* Enlaces de categoría */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          <TercerEnlacesAside Receta={'CENAS RÁPIDAS'} />
          <TercerEnlacesAside Receta={'RECETAS RÁPIDAS'} />
          <TercerEnlacesAside Receta={'PATÉS Y CREMAS PARA UNTAR'} />
          <TercerEnlacesAside Receta={'MICROONDAS'} />
          <TercerEnlacesAside Receta={'COCINA SIN HUMOS'} />
    
        </div>
    </>
  )
}
