import { FaReact } from "react-icons/fa"
import { TopBar } from "./components/layout/TopBar"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <h1 className='text-3xl font-bold underline'><FaReact size={90}/>Tudo certo, funcionando!!</h1>

      {/* teste temporario da paleta definida no root do tailwind */}
      <div className="bg-gray-100 p-8">
        <h1 className="text-2xl">Produtos Relacionados</h1>
          <button className="bg-secondary text-white font-bold py-2 px-4 rounded">
            Ver Promoção
          </button>
          <button className="bg-dark-blue text-white font-bold py-2 px-4 rounded ml-4">
            Comprar
          </button>
      </div>
    </div>
  )
}

export default App
