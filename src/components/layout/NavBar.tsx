// animação dinamica
import { motion } from 'framer-motion';
import { containerMotionProps, fadeInUpItemMotionProps } from '../../variants/animationVariants';

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
      <nav className="flex flex-col items-start p-4">
        <a href="#" className="py-3 text-sm font-bold w-full text-dark-blue mb-3">TODAS CATEGORIAS</a>
        {listaCategorias.map((item) => (
          <a key={item} href="#" className="py-3 text-sm text-gray-400 hover:text-dark-blue">
            {item}
          </a>
        ))}
      </nav>
    );
  }
  
  return (
    <motion.nav
      className="bg-white border-b border-gray-100 hidden lg:block" // oculta em telas menores que lg
      {...containerMotionProps}
    >
      <div className="container mx-auto px-4 flex justify-center items-center">
        <div className="flex items-center gap-8">
          <motion.div
            className="flex items-center font-semibold lg:gap-32 md:gap-16" // reduzido o gap para caber mais itens
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