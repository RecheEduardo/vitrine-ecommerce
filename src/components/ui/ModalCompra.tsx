import { useState } from 'react';

import { FiX } from 'react-icons/fi';

// animações dinamicas
import { motion, AnimatePresence } from 'framer-motion';
import { overlayVariants, popInVariants } from '../../variants/animationVariants';

// props do produto pro modal
import type { Produto } from '../../types/produto';

// definindo as props que o modal vai receber
interface ModalCompraProps {
  product: Produto;
  onClose: () => void;
}

export const ModalCompra: React.FC<ModalCompraProps> = ({ product, onClose }) => {
  // estado para controlar a quantidade de produtos no modal
  const [quantity, setQuantity] = useState(1);

  // funcoes para incrementar e decrementar a quantidade
  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        
        {/* overlay escuro no fundo do modal */}
        <motion.div
          className="absolute inset-0 bg-black/60"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        />

        {/* conteudo do modal */}
        <motion.div
          className="relative bg-white rounded-lg shadow-xl w-full max-w-4xl 
          p-6 md:p-8 z-10 flex flex-col md:flex-row gap-8"
          variants={popInVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* botao de fechar o modal */}
          <button onClick={onClose}className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors" >
            <FiX size={28} />
          </button>

          {/* coluna da imagem do produto */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img src={product.photo} alt={product.productName} className="max-h-80 object-contain" />
          </div>

          {/* coluna das informacoes e acoes do produto */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            
            <h2 className="text-2xl md:text-3xl font-light text-gray-500 tracking-widest mb-4">
              {product.productName}
            </h2>
            
            <p className="text-4xl font-bold text-gray-500 mb-4">
              {/* padrão brasileiro de valor R$ */}
              R$ {product.price.toFixed(2).replace('.', ',')}
            </p>
            
            <p className="text-gray-400 mb-4">
              {product.descriptionShort}
            </p>
            
            <a href="#" className="text-dark-blue font-bold text-sm mb-6 hover:underline">
              Veja mais detalhes do produto &gt;
            </a>

            <div className="flex items-center gap-4 mt-auto">
              
              {/* seletor de quantidade */}
              <div className="flex items-center border border-gray-200 rounded-md">
                
                <button onClick={decreaseQuantity} className="px-4 py-2 text-lg font-bold text-gray-500 hover:bg-gray-100">-</button>
                <span className="px-5 py-2 text-lg font-bold text-gray-500">{quantity.toString().padStart(2, '0')}</span>
                <button onClick={increaseQuantity} className="px-4 py-2 text-lg font-bold text-gray-500 hover:bg-gray-100">+</button>
              
              </div>

              {/* botao de comprar */}
              <button className="w-full bg-secondary text-black font-bold py-3 rounded-lg hover:bg-yellow-300 transition-colors">
                COMPRAR
              </button>
           
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};