import { TopBar } from "./components/layout/TopBar"
import {MainHeader} from "./components/layout/MainHeader"
import { NavBar } from "./components/layout/NavBar"
import { Footer } from "./components/layout/Footer"
import { HeroSection } from "./components/sections/HeroSection"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <MainHeader />
      <NavBar/>
      <HeroSection />
      <Footer />
    </div>
  )
}

export default App
