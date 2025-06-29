// animação dinamica
import { motion } from 'framer-motion';
import { containerMotionProps, fadeInUpItemMotionProps } from '../../variants/animationVariants';

export const Newsletter = () => {
    return (
      <section className="bg-primary py-12">
        <motion.div 
          // coluna em mobile e em linha para telas maiores
          className="container flex flex-col lg:flex-row justify-between mx-auto py-2 px-4 items-center text-gray-100 gap-8 lg:gap-4"
          {...containerMotionProps}
        >
          
          <motion.div {...fadeInUpItemMotionProps} className="text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold">Inscreva-se na nossa newsletter</h2>
            <p className="mt-2 text-white/80 max-w-2xl">Assine a nossa newsletter e receba as
             novidades e conteúdos exclusivos da Econverse.
            </p>
          </motion.div>
          
          <motion.form 
            // itens do formulário se empilham em telas menores
            className="w-full max-w-2xl flex flex-col gap-4 items-center"
            {...fadeInUpItemMotionProps}
          >
            <div className="w-full flex flex-col md:flex-row gap-4">
              {/* nome */}
              <input
                type="text"
                placeholder="Digite seu nome"
                className="w-full p-3 bg-white rounded-lg text-gray-500 focus:outline-0"
              />
  
              {/* email */}
              <input
                type="email"
                placeholder="Digite seu e-mail"
                className="w-full p-3 bg-white rounded-lg text-gray-500 focus:outline-0"
              />
  
              {/* botão de inscriçao */}
              <a href="#" type="submit" className="w-full md:w-auto text-center bg-secondary text-black border font-bold
               py-3 px-12 rounded-lg hover:bg-yellow-300 transition-colors"
              >
                INSCREVER
              </a>
            </div>
            
            {/* checkbox para assinar */}
            <div className="flex items-center self-start">
              <input type="checkbox" id="terms" className="ml-1 w-4 h-4" required/>
              <label htmlFor="terms" className="ms-2 text-sm text-white">Aceito os termos e condições</label>
            </div>
          </motion.form>

        </motion.div>
      </section>
    );
  };