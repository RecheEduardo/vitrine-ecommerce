import { FaReact } from "react-icons/fa"

function App() {
  return (
    <>
      <h1 className='text-3xl font-bold underline'><FaReact size={90}/>Tudo certo, funcionando!!</h1>

      {/* teste temporario da paleta definida no root do tailwind */}
      <div className="bg-neutral-background p-8">
        <h1 className="text-neutral-text text-2xl">Produtos Relacionados</h1>
          <button className="bg-primary-yellow text-primary-black font-bold py-2 px-4 rounded">
            Ver Promoção
          </button>
          <button className="bg-primary-blue text-primary-white font-bold py-2 px-4 rounded ml-4">
            Comprar
          </button>
      </div>
    </>
  )
}

export default App
