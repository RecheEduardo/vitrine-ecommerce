import type { Produto } from '../../types/produto';

interface CardProdutoProps {
  product: Produto; // prop desse componente PRECISA ser um produto
}

export const CardProduto: React.FC<CardProdutoProps> = ({ product }) => {
  // simulando um desconto para os produtos do card
  const originalPrice = product.price * 1.25;  

  return (
    <div className="bg-white border-0 rounded-lg p-4 flex flex-col h-full drop-shadow-xl hover:shadow-3xl transition-shadow">
      
      <img src={product.photo} alt={product.productName} className="w-full h-48 object-contain mx-auto" />
      
      <div className="flex-grow mt-4 flex flex-col">
        {/* nome */}
        <p className="text-sm text-gray-400 flex-grow">{product.productName}</p>

        <div className="mt-2">
          {/* preço */}
          <span className="text-xs text-gray-300 line-through">
            R$ {originalPrice.toFixed(2).replace('.', ',') /* replace para padrão pt-br */} 
          </span>

          {/* desconto */}
          <p className="text-xl font-bold text-gray-500">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </p>

          {/* parcela */}
          <p className="text-xs text-gray-400 mt-1">
            ou 2x de R$ {(product.price / 2).toFixed(2).replace('.', ',')} sem juros
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