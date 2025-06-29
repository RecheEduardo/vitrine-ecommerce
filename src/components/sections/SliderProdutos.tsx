export const SliderProdutos: React.FC<{title: string}> = ({ title }) => {
  return (
    <section className="py-12">
      <div className="container mx-auto py-4">

        {/* titulo customizavel do slider */}
        <div className="flex items-center gap-12">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-4xl font-bold text-dark-blue text-center">{title}</span>
            <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* menu de categorias de produtos */}
        <div className="flex justify-between gap-6 my-8 px-12 text-lg text-gray-400">
          <a href="#" className="text-primary font-bold border-b-2 border-primary pb-1">Celular</a>
          <a href="#" className="hover:text-primary">Acessórios</a>
          <a href="#" className="hover:text-primary">Tablets</a>
          <a href="#" className="hover:text-primary">Notebooks</a>
          <a href="#" className="hover:text-primary">TVs</a>
          <a href="#" className="hover:text-primary">Ver todos</a>
        </div>
        
        {/* slider sera implementado aqui */}
      </div>
    </section>
  );
};