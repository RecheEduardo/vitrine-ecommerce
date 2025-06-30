import { TopBar } from "./components/layout/TopBar"
import {MainHeader} from "./components/layout/MainHeader"
import { Footer } from "./components/layout/Footer"
import { HeroSection } from "./components/sections/HeroSection"
import { CategoriasCarousel } from "./components/sections/CategoriasCarousel"
import { Newsletter } from "./components/sections/Newsletter"
import { MarcasCarousel } from "./components/sections/MarcasCarousel"
import { ParceirosSection } from "./components/sections/ParceirosSection"
import { SliderProdutos } from "./components/sections/SliderProdutos"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <MainHeader />
      {/* <NavBar/> renderizada condicionalmente no main header */}

      <main className="flex-grow">
        <HeroSection />
        <CategoriasCarousel />
        <SliderProdutos title="Produtos relacionados" />
        <ParceirosSection />
        <SliderProdutos title="Produtos relacionados" />
        <ParceirosSection />
        <MarcasCarousel />
        <SliderProdutos title="Produtos relacionados" />
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
