import { LuMonitorSmartphone } from "react-icons/lu";
import { IoStorefrontOutline } from "react-icons/io5";
import { GiWineBottle, GiClothes } from "react-icons/gi";
import { FaTools } from "react-icons/fa";
import { PiHandHeart } from "react-icons/pi";
import { IoFitness } from "react-icons/io5";

// importando para poder utilizar um componente react como type
import type { ReactNode } from "react"

// animação dinamica
import { motion } from 'framer-motion';
import { containerMotionProps, popInItemMotionProps } from '../../variants/animationVariants';

const categorias = [ // array de categorias para renderização dinamica
  {nome: 'Tecnologia',icone: <LuMonitorSmartphone size={65} />,ativo: true},
  {nome: 'Supermercado',icone: <IoStorefrontOutline size={65}/>,ativo: false},
  {nome: 'Bebidas', icone: <GiWineBottle size={65} />,ativo: false},
  {nome: 'Ferramentas',icone: <FaTools size={65}/>, ativo: false},
  {nome: 'Saúde', icone: <PiHandHeart size={65} />,ativo: false},
  {nome: 'Esportes e Fitness', icone: <IoFitness size={65}/>,ativo: false},
  {nome: 'Moda',icone: <GiClothes size={65}/>, ativo: false},
]

// tipagem dos objetos
type CategoryItemProps = {
  nome: string;
  icone: ReactNode;
  ativo: boolean;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ nome, icone, ativo }) => (
  <div className="flex flex-col items-center gap-4 flex-shrink-0 cursor-pointer
   hover:scale-90 transition-all duration-200"
  >
    {/* inserção de classes condicional a partir do boolean de ativo no tipo criado */}
    {/* tamanho dos ícones ajustado para telas menores */}
    <div
      className={`w-28 h-28 md:w-36 md:h-36 flex items-center justify-center rounded-lg 
      shadow-lg ${ativo ? 'text-dark-blue' : 'text-gray-400'}`}
    >
      {icone}
    </div>

    <span className={`text-sm text-center ${ativo ? 'text-dark-blue font-extrabold' : 'text-gray-400 font-medium'}`}>
      {nome}
    </span>
  </div>
);

export const CategoriasCarousel = () => {
  return (
      <section className="py-12 bg-white">
          <div className="container mx-auto px-2 md:px-4">
              {/* overflow-x-auto no container para permitir rolagem em telas pequenas */}
              {/* em telas 'lg', o conteudo fica centralizado */}
              <motion.div className="flex gap-6 lg:gap-12 justify-start lg:justify-center overflow-x-auto pb-4 -mb-4" {...containerMotionProps}>
                  {categorias.map((categoria) => ( // map renderizando os objetos como props
                    <motion.div 
                      key={categoria.nome}
                      {...popInItemMotionProps} 
                    >  
                      <CategoryItem
                          nome={categoria.nome}
                          icone={categoria.icone}
                          ativo={categoria.ativo}
                      />
                    </motion.div>
                  ))}
              </motion.div>
          </div>
      </section>
  );
};
