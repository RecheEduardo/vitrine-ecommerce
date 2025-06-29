// animação dinamica
import { motion } from 'framer-motion';
import { containerMotionProps, fadeInUpItemMotionProps, popInItemMotionProps } from '../../variants/animationVariants';

const ParceiroCard = () => (
  <motion.div 
    style={{ backgroundImage: "url('/parceirosCardBackground.jpg')" }}
    className="relative w-full h-96 md:h-115 rounded-4xl overflow-hidden bg-cover
    bg-center hover:scale-95 transition-all"
    {...containerMotionProps}
  >
    {/* estilo de fundo escuro para o background */}
    <div className="absolute inset-0 bg-black/30" /> 

    <div className="relative h-full flex flex-col justify-end gap-3 md:gap-5 p-6 md:p-12 text-white">
      
      <motion.h3 className="text-4xl md:text-5xl font-bold" {...popInItemMotionProps}>
        Parceiros
      </motion.h3>
      
      <motion.p className="text-base md:text-lg mt-1" {...popInItemMotionProps}>
        Lorem ipsum dolor sit <br/> amet, consectetur
      </motion.p>
      
      <motion.button className="mt-4 text-lg md:text-2xl bg-secondary text-black font-bold py-2 px-6 md:px-8 
        rounded-lg self-start hover:bg-yellow-300 transition-colors hover:cursor-pointer"
        {...popInItemMotionProps}
      >
        Confira
      </motion.button>
    
    </div>
  </motion.div>
);

export const ParceirosSection = () => {
  return (
    <section className="py-6 md:py-12 bg-white">
      <div className="container mx-auto px-2">
        {/* utilizando grid para facilitar a responsividade */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4" {...containerMotionProps}>
          <motion.div {...fadeInUpItemMotionProps}>
            <ParceiroCard />
          </motion.div>
          <motion.div {...fadeInUpItemMotionProps}>
            <ParceiroCard />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};