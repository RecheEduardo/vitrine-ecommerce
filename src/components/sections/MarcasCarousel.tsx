const IconeMarca = () => ( // componente iterado no carrossel 
  <div className="w-64 h-64 flex-shrink-0 bg-white border-0 rounded-full 
    flex items-center justify-center drop-shadow-xl hover:drop-shadow-2xl
    transition-all duration-300 hover:cursor-pointer hover:scale-90"
  >
    {/* usando asset do layout figma da logo da econverse */}
    <img src="/siteLogo.png" alt="Brand Logo" className="h-12" />
  </div>
);

export const MarcasCarousel = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">

        <h2 className="text-4xl font-bold text-dark-blue text-center mb-8">Navegue por marcas</h2>
        
        <div className="relative">
          <div className="flex justify-center gap-12 pb-8 -mb-4 px-12">
            {/* mapeando um array (ingessado) para simular 5 logos de marca */}
            {[...Array(5)].map((_, i) =>  <IconeMarca key={i} />) /* componentizando icones de marcas */}
          </div>
        </div>
        
      </div>
    </section>
  );
};