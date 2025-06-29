// animação dinamica
import { motion } from 'framer-motion';
import { containerMotionProps, fadeInUpItemMotionProps, popInItemMotionProps } from '../../variants/animationVariants';

interface NavBarProps { // verificador para renderizar componente mobile
  isMobile?: boolean;
}

export const NavBar: React.FC<NavBarProps> = ({ isMobile = false }) => {
  const listaCategorias = [ // passagem direta dos setores por string
  "SUPERMERCADO",
  "LIVROS",
  "MODA",
  "LANÇAMENTOS",
  "OFERTAS DO DIA",
  "ASSINATURA",
]

  // renderização para mobile
  if (isMobile) {
    return (
      <motion.nav
        className="flex flex-col items-start p-4"
        // animançao custom dos filhos em cascata
        variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {},
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <motion.a
            href="#"
            className="py-3 text-sm font-bold w-full text-tertiary mb-3 border-b border-tertiary"
            variants={fadeInUpItemMotionProps.variants}
        >
            TODAS CATEGORIAS
        </motion.a>
        {listaCategorias.map((item) => (
          <motion.a
            key={item}
            href="#"
            className="py-3 text-sm text-gray-300 font-semibold hover:text-tertiary"
            variants={fadeInUpItemMotionProps.variants}
          >
            • {item}
          </motion.a>
        ))}
      </motion.nav>
    );
  }

  return (
    <motion.nav
      className="bg-white border-b border-gray-100 hidden lg:block" // oculta em telas menores que lg
      {...containerMotionProps}
    >
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex items-center gap-8">
          <motion.div
            className="flex items-center font-semibold gap-8 2xl:gap-32"
            {...popInItemMotionProps}
          >
            <motion.a
              href="#"
              className="py-3 text-sm font-bold text-tertiary"
              {...fadeInUpItemMotionProps}
            >
              TODAS CATEGORIAS
            </motion.a>

            {listaCategorias.map((item) => (
              <motion.a
                key={item}
                href="#"
                className="py-3 text-sm text-gray-300 hover:text-tertiary"
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