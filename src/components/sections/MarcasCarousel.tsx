export const MarcasCarousel: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-dark-blue text-center mb-8">
          Navegue por marcas
        </h2>
        
        <div className="relative">
          <div className="flex justify-center gap-12 pb-8 -mb-4 px-12">
            {[...Array(5)].map((_, i) => ( // mapeando um array (ingessado) para simular 5 logos de marca
              <div key={i} className="w-48 h-48 flex-shrink-0 bg-gray-200 border-0 rounded-full 
                flex items-center justify-center">
                <span className="text-gray-500">Teste</span>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};