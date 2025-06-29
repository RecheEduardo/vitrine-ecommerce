// TODO: tipagem será adicionada depois
// import type { Produto } from '../../types/produto';

export const CardProduto: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-4 flex flex-col">
      
      {/* placeholder para a imagem */}
      <div className="w-full h-48 bg-gray-200 rounded-md mx-auto" />
      
      <div className="mt-4">
        {/* nome */}
        <p className="text-sm text-gray-400">Nome do Produto Fictício</p>

        {/* preço */}
        <p className="text-xl font-bold text-gray-500 mt-2">
          R$ 100,00
        </p>

        <p className="text-xs text-gray-400 mt-1">
          ou 2x de R$ 50,00 sem juros
        </p>
      </div>

      <button className="mt-4 w-full bg-dark-blue text-white font-bold py-2 rounded-lg">
        COMPRAR
      </button>
    </div>
  );
};