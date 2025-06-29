import { TopBar } from "./components/layout/TopBar"
import {MainHeader} from "./components/layout/MainHeader"
import { NavBar } from "./components/layout/NavBar"
import { Footer } from "./components/layout/Footer"
import { HeroSection } from "./components/sections/HeroSection"
import { CategoriasCarousel } from "./components/sections/CategoriasCarousel"
import { Newsletter } from "./components/sections/Newsletter"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <MainHeader />
      <NavBar/>
      <HeroSection />
      <CategoriasCarousel />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
