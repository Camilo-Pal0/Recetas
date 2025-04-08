import { EnlacesAsides } from "./EnlacesAsides"

export const Aside = ({titulo}) => {
  return (
    <>
    <div className="bg-gray-800 text-white p-2 mb-4 font-black rounded-lg">{titulo} </div>
    
    {/* Enlaces de categoría */}
    <div className="grid grid-cols-2 gap-2 mb-6">
      <EnlacesAsides Receta={'RECETAS DE LA ABUELA'} />
      <EnlacesAsides Receta={'COCINA REGIONAL'} />
      <EnlacesAsides Receta={'AVES Y POLLOS'} />
      <EnlacesAsides Receta={'GUISOS DE CARNE'} />
    </div>
    </>
  )
}
