const categorias = [ // base do array de objetos iterado
  { nome: 'Tecnologia' },
  { nome: 'Supermercado' },
  { nome: 'Bebidas' },
  { nome: 'Ferramentas' },
  { nome: 'Saúde' },
  { nome: 'Esportes e Fitness' },
  { nome: 'Moda' },
];

export const CategoriasCarousel: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex gap-12 justify-center overflow-x-auto pb-4 -mb-4">
          {categorias.map((categoria) => (
            <div key={categoria.nome} className="flex flex-col items-center gap-4">
              <div className="w-36 h-36 flex items-center justify-center rounded-lg shadow-lg bg-gray-100">
                {/* os icones virao aparecer por aqui */}
              </div>
              <span className="font-medium text-gray-500">
                {categoria.nome}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};