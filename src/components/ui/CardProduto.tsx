import type { Produto } from '../../types/produto';

interface CardProdutoProps {
  product: Produto;
}

export const CardProduto: React.FC<CardProdutoProps> = ({ product }) => {
  return (
    <div className="bg-white border-0 rounded-lg p-4 flex flex-col h-full drop-shadow-xl">
      
      <img src={product.photo} alt={product.productName} className="w-full h-48 object-contain mx-auto" />
      
      <div className="flex-grow mt-4 flex flex-col">
        <p className="text-sm text-gray-400 flex-grow">{product.productName}</p>

        <div className="mt-2">
          {/* preço original e parcelamento vao calculados no próximo commit */}
          <span className="text-xs text-gray-300 line-through">
            R$ {product.price * 1.25} 
          </span>
          <p className="text-xl font-bold text-gray-500">
            R$ {product.price}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            ou 2x de R$ {product.price / 2} sem juros
          </p>
          <p className="text-xs font-bold text-dark-blue mt-1">Frete grátis</p>
        </div>
      </div>

      <button className="mt-4 w-full bg-dark-blue text-white font-bold py-2 rounded-lg
        hover:bg-blue-900 transition-colors hover:cursor-pointer"
      >
        COMPRAR
      </button>
    </div>
  );
};