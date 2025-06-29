// animação dinamica
import { motion } from 'framer-motion';
import { containerMotionProps, fadeInUpItemMotionProps } from '../../variants/animationVariants';

export const NavBar = () => {
  const listaCategorias = [ // passagem direta dos setores por string
    "SUPERMERCADO",
    "LIVROS",
    "MODA",
    "LANÇAMENTOS",
    "OFERTAS DO DIA",
    "ASSINATURA",
  ]

  return (
    <motion.nav
      className="bg-white border-b border-gray-200"
      {...containerMotionProps}
    >
      <div className="container mx-auto px-4 flex justify-center items-center">
        <div className="flex items-center gap-8">
          <motion.div
            className="hidden lg:flex items-center font-semibold gap-32"
            {...fadeInUpItemMotionProps}
          >
            <motion.a
              href="#"
              className="py-3 text-sm text-dark-blue"
              {...fadeInUpItemMotionProps}
            >
              TODAS CATEGORIAS
            </motion.a>

            {listaCategorias.map((item) => (
              <motion.a
                key={item}
                href="#"
                className="py-3 text-sm text-gray-300 hover:text-dark-blue"
                {...fadeInUpItemMotionProps}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};