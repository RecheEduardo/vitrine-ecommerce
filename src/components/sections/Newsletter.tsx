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
          
          <form className="max-w-2xl flex flex-col md:flex-col gap-4 items-start">
            <div className="flex gap-4">
              {/* nome */}
              <input
                type="text"
                placeholder="Digite seu nome"
                className="w-full md:w-1/3 p-3 bg-white rounded-lg text-gray-500 focus:outline-0"
              />
  
              {/* email */}
              <input
                type="email"
                placeholder="Digite seu e-mail"
                className="w-full md:w-1/3 p-3 bg-white rounded-lg text-gray-500 focus:outline-0"
              />
  
              {/* botão de inscriçao */}
              <a href="#" type="submit" className="w-full md:w-auto bg-secondary text-black border font-bold
               py-3 px-12 rounded-lg hover:bg-yellow-300 transition-colors"
              >
                INSCREVER
              </a>
            </div>
            
            {/* checkbox para assinar */}
            <div className="flex items-center">
              <input type="checkbox" value="" className="ml-1 w-4 h-4" required/>
              <label className="ms-2 text-sm text-white">Aceito os termos e condições</label>
            </div>
          </form>
        </div>
      </section>
    );
  };