// importando para poder utilizar um componente react como type
import type { ReactNode } from "react";

const categorias = [
  { nome: 'Tecnologia', icone: null, ativo: true },
  { nome: 'Supermercado', icone: null, ativo: false },
  { nome: 'Bebidas', icone: null, ativo: false },
  { nome: 'Ferramentas', icone: null, ativo: false },
  { nome: 'Saúde', icone: null, ativo: false },
  { nome: 'Esportes e Fitness', icone: null, ativo: false },
  { nome: 'Moda', icone: null, ativo: false },
];

// tipagem dos objetos
type CategoryItemProps = {
  nome: string;
  icone: ReactNode;
  ativo: boolean;
};

const CategoryItem: React.FC<CategoryItemProps> = ({ nome, icone }) => (
  <div className="flex flex-col items-center gap-4 flex-shrink-0">
    <div className="w-36 h-36 flex items-center justify-center rounded-lg shadow-lg">
      {icone}
    </div>
    <span className="text-sm font-medium text-gray-400">
      {nome}
    </span>
  </div>
);

export const CategoriasCarousel: React.FC = () => {
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