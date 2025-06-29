export const Newsletter = () => {
  return (
    <section className="bg-primary py-12">
      <div className="container flex justify-between mx-auto py-2 items-center text-gray-100">
        
        <div>
          <h2 className="text-3xl font-bold">Inscreva-se na nossa newsletter</h2>
          <p className="mt-2 text-white/80 max-w-2xl">Assine a nossa newsletter e receba as
           novidades e conteúdos exclusivos da Econverse.
          </p>
        </div>
        
        <form className="max-w-2xl flex items-start gap-4">
          {/* email */}
          <input
            type="email"
            placeholder="Digite seu e-mail"
            className="p-3 bg-white rounded-lg text-gray-500 focus:outline-0"
          />

          {/* botão de inscriçao */}
          <a href="#" type="submit" className="bg-secondary text-black border font-bold
             py-3 px-12 rounded-lg hover:bg-yellow-300 transition-colors"
          >
            INSCREVER
          </a>
        </form>
      </div>
    </section>
  );
};