export const HeroSection = () => {
    return (
      <section className="relative w-full py-30 bg-primary">
        
        <div className="relative container mx-auto px-4 flex flex-col justify-center gap-4 items-start text-white">
          <h1 className="text-4xl md:text-5xl font-bold max-w-3xl">
            Venha conhecer nossas promoções
          </h1>
          
          <p className="text-4xl mt-4">
            <span className="text-secondary font-semibold">50% Off</span> nos produtos
          </p>
          
          <a href="#" className="mt-10 bg-secondary text-black font-bold py-4 px-16 rounded-md hover:bg-yellow-300 transition-colors">
            Ver produto
          </a>
        </div>
      </section>
    );
};