import { FiX } from 'react-icons/fi';

// componente estatico (por enquanto)
export const ModalCompra = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      
      {/* overlay escuro no fundo do modal */}
      <div
        className="absolute inset-0 bg-black/60"
      />

      {/* conteudo do modal */}
      <div
        className="relative bg-white rounded-lg shadow-xl w-full max-w-4xl p-6 md:p-8 z-10 flex flex-col md:flex-row gap-8"
      >
        {/* botao de fechar o modal */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <FiX size={28} />
        </button>

        {/* coluna da imagem do produto */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          {/* imagem de placeholder */}
          <div className="w-full h-80 bg-gray-200 rounded animate-pulse" />
        </div>

        {/* coluna das informacoes e acoes do produto */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          
          <h2 className="text-2xl md:text-3xl font-light text-gray-500 tracking-widest mb-4">
            NOME DO PRODUTO
          </h2>
          
          <p className="text-4xl font-bold text-gray-500 mb-4">
            R$ 1.499,90
          </p>
          
          <p className="text-gray-400 mb-4">
            lorem ipsum dolor sit amet lorem lore lorem lorem
          </p>
          
          <a href="#" className="text-dark-blue font-bold text-sm mb-6 hover:underline">
            Veja mais detalhes do produto &gt;
          </a>

          <div className="flex items-center gap-4 mt-auto">
            
            {/* seletor de quantidade */}
            <div className="flex items-center border border-gray-200 rounded-md">
              <button className="px-4 py-2 text-lg font-bold text-gray-500 hover:bg-gray-100">-</button>
              <span className="px-5 py-2 text-lg font-bold text-gray-500">01</span>
              <button className="px-4 py-2 text-lg font-bold text-gray-500 hover:bg-gray-100">+</button>
            </div>

            {/* botao de comprar */}
            <button className="w-full bg-secondary text-black font-bold py-3 rounded-lg hover:bg-yellow-300 transition-colors">
              COMPRAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};