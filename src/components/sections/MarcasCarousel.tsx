// animação dinamica
import { motion } from 'framer-motion';
import { containerMotionProps, popInItemMotionProps } from '../../variants/animationVariants';

const IconeMarca = () => ( // componente iterado no carrossel 
  <div className="w-42 h-42 md:w-64 md:h-64 flex-shrink-0 bg-white border-0 rounded-full 
    flex items-center justify-center drop-shadow-xl hover:drop-shadow-2xl
    transition-all duration-300 hover:cursor-pointer hover:scale-90"
  >
    {/* usando asset do layout figma da logo da econverse */}
    <img src="/siteLogo.png" alt="Brand Logo" className="h-8 md:h-12" />
  </div>
);

export const MarcasCarousel = () => {
  return (
    <section className="py-12 bg-white">
      <motion.div className="container mx-auto px-4" {...containerMotionProps}>

        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-dark-blue text-center mb-8"
          {...popInItemMotionProps}
        >
          Navegue por marcas
        </motion.h2>

        <motion.div 
          className="flex justify-start md:justify-center gap-12 pb-8 -mb-4
          px-12 overflow-x-auto md:overflow-hidden" 
          {...containerMotionProps}
        >
          {/* mapeando um array (ingessado) para simular 5 logos de marca */}
          {[...Array(5)].map((_, i) => <motion.div {...popInItemMotionProps}><IconeMarca key={i} /></motion.div>) /* componentizando icones de marcas */}
        </motion.div>
        
      </motion.div>
    </section>
  );
};