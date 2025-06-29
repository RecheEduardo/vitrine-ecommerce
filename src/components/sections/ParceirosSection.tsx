const ParceiroCard = () => (
  <div 
    style={{ backgroundImage: "url('/parceirosCardBackground.jpg')" }}
    className="relative w-full h-115 rounded-4xl overflow-hidden bg-cover
    bg-center hover:scale-95 transition-all"
  >
    {/* estilo de fundo escuro para o background */}
    <div className="absolute inset-0" /> 

    <div className="relative h-full flex flex-col justify-end gap-5 p-12 text-white">
      
      <h3 className="text-5xl font-bold">Parceiros</h3>
      
      <p className="text-lg mt-1">Lorem ipsum dolor sit <br/> amet, consectetur</p>
      
      <button className="mt-4 text-2xl bg-secondary text-black font-bold py-2 px-8 
        rounded-lg self-start hover:bg-yellow-300 transition-colors hover:cursor-pointer"
      >
        Confira
      </button>
    
    </div>
  </div>
);

export const ParceirosSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        {/* utilizando grid para facilitar a responsividade */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ParceiroCard />
          <ParceiroCard />
        </div>
      </div>
    </section>
  );
};