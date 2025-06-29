const ParceiroCard = () => {
  return (
    <div
      style={{ backgroundImage: "url('/parceirosCardBackground.jpg')" }}
      className="relative w-full h-64 rounded-4xl overflow-hidden bg-cover bg-center"
    >
      <div className="absolute inset-0" />
      <div className="relative h-full flex flex-col justify-end p-8 text-white">
        <h3 className="text-3xl font-bold">Parceiros</h3>
        <p className="mt-2">Descrição do parceiro</p>
        <button className="mt-4 bg-secondary text-black font-bold py-2 px-6 rounded-lg">
          Confira
        </button>
      </div>
    </div>
  );
};

export const ParceirosSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <ParceiroCard />
      </div>
    </section>
  );
};
