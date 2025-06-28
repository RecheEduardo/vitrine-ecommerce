import { LuMonitorSmartphone } from "react-icons/lu";
import { IoStorefrontOutline } from "react-icons/io5";
import { GiWineBottle, GiClothes } from "react-icons/gi";
import { FaTools } from "react-icons/fa";
import { PiHandHeart } from "react-icons/pi";
import { IoFitness } from "react-icons/io5";

// importando para poder utilizar um componente react como type
import type { ReactNode } from "react";

const categorias = [ // array de categorias para renderização dinamica
  { nome: 'Tecnologia', icone: <LuMonitorSmartphone size={65} />, ativo: true },
  { nome: 'Supermercado', icone: <IoStorefrontOutline size={65} />, ativo: false },
  { nome: 'Bebidas', icone: <GiWineBottle size={65} />, ativo: false },
  { nome: 'Ferramentas', icone: <FaTools size={65} />, ativo: false },
  { nome: 'Saúde', icone: <PiHandHeart size={65} />, ativo: false },
  { nome: 'Esportes e Fitness', icone: <IoFitness size={65} />, ativo: false },
  { nome: 'Moda', icone: <GiClothes size={65} />, ativo: false },
];

// tipagem dos objetos
type CategoryItemProps = {
  nome: string;
  icone: ReactNode;
  ativo: boolean;
};

const CategoryItem: React.FC<CategoryItemProps> = ({ nome, icone, ativo }) => (
  <div className="flex flex-col items-center gap-4 flex-shrink-0">
    <div
      className={`w-36 h-36 flex items-center justify-center rounded-lg 
      shadow-lg ${ativo ? 'text-dark-blue' : 'text-gray-400'}`}
    >
      {icone}
    </div>
    <span className={`text-sm ${ativo ? 'text-dark-blue font-extrabold' : 'text-gray-400 font-medium'}`}>
      {nome}
    </span>
  </div>
);

export const CategoriasCarousel = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex gap-12 justify-center overflow-x-auto pb-4 -mb-4">
          {categorias.map((categoria) => (
            <CategoryItem
              key={categoria.nome}
              nome={categoria.nome}
              icone={categoria.icone}
              ativo={categoria.ativo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};