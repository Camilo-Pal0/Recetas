import { RedesHeader } from "./components/RedesHeader"
import { Header } from "./components/Header"
import { Menu } from "./components/Menu"
import { Rutas } from "./components/Rutas"
import { Content } from "./components/Content"
import { Aside } from "./components/Aside"
import { SegundoAside } from "./components/SegundoAside"
import { TercerAside } from "./components/TercerAside"
import { MiniCards } from "./components/MiniCards"
import { Paginador } from "./components/Paginador"
import { SecciónRecetasCaseras } from "./components/SecciónRecetasCaseras"
import { LinksRecetasCaseras } from "./components/LinksRecetasCaseras"
import { SeccionSlider } from "./components/SeccionSlider"
import { Slider } from "./components/Slider"
import { SeccionInfoRecetas } from "./components/SeccionInfoRecetas"
import { GaleriaImagenes } from "./components/GaleriaImagenes"

/* Imagenes */
import Receta2 from './assets/img/Receta2.jpg'
import Receta3 from './assets/img/Receta3.jpg'
import Receta4 from './assets/img/Receta4.jpg'
import Receta5 from './assets/img/Receta5.jpg'
import Receta6 from './assets/img/Receta6.jpg'
import Receta7 from './assets/img/Receta7.jpg'

function App() {

  return (
    <>
    <div className="flex flex-col justify-center items-center bg-gray-200">
        
        {/* Redes Sociales */}
        <div className="bg-black w-full max-w-[1100px] text-white p-2 hidden sm:flex justify-center mx-auto">
            <RedesHeader />
        </div>

        {/* Header */}
        <div className="bg-white w-full max-w-[1100px] text-black font-bold text-center h-50 flex flex-col justify-end hidden sm:flex">
            <Header />
        </div>

        {/* Menú */}
        <div className="w-full max-w-[1100px] text-black font-bold text-center bg-pink-400">
            <Menu />
        </div>  

        {/* Rutas */}
        <div className="w-full max-w-[1100px] text-black font-thin h-20 bg-white flex flex-col justify-center text-xl">
            <Rutas />
        </div>

        {/* Main Content */}
        <div className="w-full max-w-[1100px] flex flex-col lg:flex-row bg-white">
            {/* Contenido principal */}
            <div className="w-full lg:w-2/3 p-4">
                <Content />

                {/* Cards Recetas */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <MiniCards imagen={Receta2} titulo={'Ensalada de peperoni'} opinion={3} />
                    <MiniCards imagen={Receta3} titulo={'Tortillas con huevo y salsa de Ajo'} opinion={2} />
                    <MiniCards imagen={Receta4} titulo={'Mazorca con mantequilla y pepinillo'} opinion={5} />
                    <MiniCards imagen={Receta5} titulo={'Postre de cereza'} opinion={1} />
                    <MiniCards imagen={Receta6} titulo={'Postre de Fresa con chantillí'} opinion={2} />
                    <MiniCards imagen={Receta7} titulo={'Puré de Champinones'} opinion={10} />
                </div>

                {/* Paginador */}
                <div className="flex justify-center items-center m-3">
                    <Paginador />
                </div>    

                {/* Sección Recetas de cocina Casera */}
                <div className="mt-2 bg-gray-50 rounded-2xl">
                    <SecciónRecetasCaseras />
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-6 justify-items-start p-4">
                        <LinksRecetasCaseras Receta="Freidora de Aire" />
                        <LinksRecetasCaseras Receta="Ensaladas y Aliños" />
                        <LinksRecetasCaseras Receta="Entrantes y tapas" />
                        <LinksRecetasCaseras Receta="Masas y panes" />
                        <LinksRecetasCaseras Receta="Arroces" />
                        <LinksRecetasCaseras Receta="Pastas" />
                        <LinksRecetasCaseras Receta="Huevos" />
                        <LinksRecetasCaseras Receta="Sopas y cremas" />
                        <LinksRecetasCaseras Receta="Verduras" />
                        <LinksRecetasCaseras Receta="Legumbres y cocidos" />
                        <LinksRecetasCaseras Receta="Pescados y mariscos" />
                        <LinksRecetasCaseras Receta="Carne" />
                        <LinksRecetasCaseras Receta="Pollo y aves" />
                        <LinksRecetasCaseras Receta="Salsas y guarniciones" />
                        <LinksRecetasCaseras Receta="Postres" />
                        <LinksRecetasCaseras Receta="Bebidas" />
                        <LinksRecetasCaseras Receta="Desayunos" />
                    </div>
                    <div className="border-t border-dashed border-[#ea5329] my-4"></div>
                </div>

                {/* Sección Slider */}
                <div>
                    <SeccionSlider/>
                    <Slider/>
                </div>

                {/* Sección info */}
                <div>
                    <SeccionInfoRecetas/>
                    <div className="w-full p-4 mb-10">
                        <GaleriaImagenes />
                    </div>
                </div>
            </div>

            {/* Contenedor Aside */}
            <div className="w-full lg:w-1/3 bg-white p-2">
                <Aside titulo={'COCINA CASERA Y FAMILIAR'} />
                <SegundoAside titulo={'POSTRES Y REPOSTERÍA'} />
                <TercerAside titulo={'COCINA FÁCIL Y RÁPIDA'} />
            </div>
        </div>

    </div>
    </>
  )
}

export default App
