import { FiSearch } from "react-icons/fi";
import { PiShoppingCart, PiUserCircle, PiHeart  } from "react-icons/pi";

export const MainHeader = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto p-4 flex justify-between items-center border-b border-gray-100">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src="/siteLogo.png" alt="Econverse Logo" className="h-12" />
        </div>

        {/* Search Bar */}
        <div className="relative w-full max-w-xl mx-1 hidden md:block">
            <input
                type="text"
                placeholder="O que você está buscando?"
                className="w-full py-3 pl-6 pr-12 font-semibold bg-gray-100 rounded-lg
                          text-gray-500 placeholder-gray-300"
            />
            <a className="absolute inset-y-0 right-0 flex items-center pr-5">
                <FiSearch size={24} className="text-gray-300" />
            </a>
        </div>

        {/* icones de ação */}
        <div className="flex items-center gap-4 text-gray-300">
          
          {/* wishlist */}
          <button className="p-2 rounded-full hover:bg-gray-100
           hover:text-gray-500 transition-all duration-100 cursor-pointer"
          >
            <PiHeart size={36}/>
          </button>

          {/* perfil */}
          <button className="p-2 rounded-full hover:bg-gray-100
           hover:text-gray-500 transition-all duration-100 cursor-pointer"
          >
            <PiUserCircle size={36}/>
          </button>

          {/* carrinho de compras */}
          <button className="p-2 rounded-full hover:bg-gray-100
           hover:text-gray-500 transition-all duration-100 cursor-pointer"
          >
            <PiShoppingCart size={36}/>
          </button>
        </div>
      </div>
    </header>
  );
};