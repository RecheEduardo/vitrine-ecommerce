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

        {/* o resto do componente vira aqui */}
      </div>
    </section>
  );
};