import { SegundoEnlancesAsides } from "./SegundoEnlancesAsides"

export const SegundoAside = ({titulo}) => {
  return (
    <>
        <div className="bg-gray-800 text-white p-2 mb-4 font-black rounded-lg">{titulo} </div>
        
        {/* Enlaces de categoría */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          <SegundoEnlancesAsides Receta={'POSTRES CON CHOCOLATE'} />
          <SegundoEnlancesAsides Receta={'POSTRES CON FRUTA'} />
          <SegundoEnlancesAsides Receta={'RECETAS DE REPOSTERÍA'} />
          <SegundoEnlancesAsides Receta={'POSTRES LIGHT'} />
          <SegundoEnlancesAsides Receta={'GALLETAS'} />
    
        </div>
    </>
  )
}
