// animação dinamica
import { motion } from 'framer-motion';
import { containerMotionProps, popInItemMotionProps } from '../../variants/animationVariants';

export const HeroSection = () => {
  return (
    <section className="relative w-full py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/heroSectionBackground.jpg')" }}>
      
      {/* gradiente na imagem de fundo da hero */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/20 to-transparent" />
      
      <motion.div 
        className="relative container mx-auto px-4 flex flex-col justify-center gap-4 items-start text-white"
        {...containerMotionProps}
      >
        <motion.h1 className="text-4xl md:text-5xl font-bold max-w-3xl" {...popInItemMotionProps}>
          Venha conhecer nossas promoções
        </motion.h1>
        
        <motion.p className="text-4xl mt-4" {...popInItemMotionProps}>
          <span className="text-secondary font-semibold">50% Off</span> nos produtos
        </motion.p>
        
        <motion.a 
          href="#" 
          className="mt-10 bg-secondary text-black font-bold py-4 
          px-16 rounded-md hover:bg-yellow-300 transition-colors"
          {...popInItemMotionProps}
        >
          Ver produto
        </motion.a>

      </motion.div>
    </section>
  );
};