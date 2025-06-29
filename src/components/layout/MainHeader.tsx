import { useState, useEffect, useRef } from 'react';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi';
import { PiShoppingCart, PiUserCircle, PiHeart } from 'react-icons/pi';
import { NavBar } from './NavBar';

// animações
import { motion, AnimatePresence } from 'framer-motion';
import { containerMotionProps, fadeInUpItemMotionProps, fadeInDownVariants, overlayVariants } from '../../variants/animationVariants';

export const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null); // ref que mede o tamanho da navbar

  // efeito de bloquear o scroll da pagina quando abre o menu
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);


  return (
    // ref condicional de abertura do menu mobile
    <header className="bg-white sticky top-0 z-50" ref={headerRef}>
      <motion.div
        className="container mx-auto p-4 flex justify-between items-center border-b border-gray-100"
        {...containerMotionProps}
      >

        {/* Logo */}
        <motion.div className="flex-shrink-0" {...fadeInUpItemMotionProps}>
          <img src="/siteLogo.png" alt="Econverse Logo" className="h-10 md:h-12" />
        </motion.div>

        {/* search Bar para Desktop */}
        <motion.div className="relative w-full max-w-xl mx-4 hidden md:block" {...fadeInUpItemMotionProps}>
            <input
                type="text"
                placeholder="O que você está buscando?"
                className="w-full py-3 pl-6 pr-12 font-semibold bg-gray-100 rounded-lg
                text-gray-500 placeholder-gray-300 focus:outline-none focus:ring-0 
                focus:drop-shadow-md transition-all duration-300"
            />
            <a href="#" className="absolute inset-y-0 right-0 flex items-center pr-5">
                <FiSearch size={24} className="text-gray-300" />
            </a>
        </motion.div>

        {/* icones de ação */}
        <motion.div className="flex items-center gap-2 md:gap-4 text-gray-300" {...fadeInUpItemMotionProps}>
          
          {/* Ícone de busca para Mobile */}
          <button className="p-2 rounded-full hover:bg-gray-100 hover:text-gray-500 md:hidden">
            <FiSearch size={28} />
          </button>

          {/* wishlist */}
          <button className="p-2 rounded-full hover:bg-gray-100 hover:text-gray-500 transition-all duration-100 cursor-pointer hidden sm:block">
            <PiHeart size={36}/>
          </button>

          {/* perfil */}
          <button className="p-2 rounded-full hover:bg-gray-100 hover:text-gray-500 transition-all duration-100 cursor-pointer">
            <PiUserCircle size={36}/>
          </button>

          {/* carrinho de compras */}
          <button className="p-2 rounded-full hover:bg-gray-100 hover:text-gray-500 transition-all duration-100 cursor-pointer">
            <PiShoppingCart size={36}/>
          </button>

          {/* o botão de menu precisa estar sobre o menu que abre */}
          <button
            className="p-2 rounded-full hover:bg-gray-100 hover:text-gray-500 lg:hidden z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </motion.div>
      </motion.div>

      <div className="sm:hidden md:hidden lg:block">
        <NavBar />
      </div>


      {/* menu Mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <div>
            {/* overlay ajustado da pagina toda */}
            <motion.div
              className="fixed inset-x-0 bottom-0 bg-black/50 z-40" // z index menor que o header
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setIsMenuOpen(false)}
              // o 'top' é definido puxando o ref da altura da pagina dinamicamente com base no header
              style={{ top: headerRef.current?.offsetHeight }}
            />

            {/* conteúdo do menu, posicionado a partir do header */}
            <motion.div
              className="absolute w-full lg:hidden bg-white shadow-lg z-50"
              variants={fadeInDownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <NavBar isMobile={true} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
};