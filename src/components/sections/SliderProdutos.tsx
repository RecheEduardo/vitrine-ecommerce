import { useRef } from 'react';

// elementos da lib swiper para sliders modernos
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

// icones dos chevron's (setas) dos sliders
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const SliderProdutos: React.FC<{title: string}> = ({ title }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  
  return (
    <section className="py-12">
      <div className="container mx-auto py-4">
        {/* titulo e menu de categorias... */}
        <div className="flex items-center gap-12">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-4xl font-bold text-dark-blue text-center">{title}</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>
        <div className="flex justify-between gap-6 my-8 px-12 text-lg text-gray-400">
          <a href="#" className="text-primary font-bold border-b-2 border-primary pb-1">Celular</a>
          <a href="#" className="hover:text-primary">Acessórios</a>
          <a href="#" className="hover:text-primary">Tablets</a>
          <a href="#" className="hover:text-primary">Notebooks</a>
          <a href="#" className="hover:text-primary">TVs</a>
          <a href="#" className="hover:text-primary">Ver todos</a>
        </div>

        <div className="relative">
          <Swiper spaceBetween={16} slidesPerView={4}>
            {[...Array(8)].map((_, i) => (
              <SwiperSlide key={i} className="h-auto pb-6 px-3">
                <div className="bg-white rounded-lg p-4 h-96 drop-shadow-xl" />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* setas de navegação */}
          <button ref={navigationPrevRef} 
            className="absolute top-1/2 -left-15 z-10 -translate-y-1/2 bg-white rounded-full
            p-2 shadow-md text-primary hover:bg-gray-100"
          >
            <FaChevronLeft size={24} />
          </button>
          
          <button ref={navigationNextRef} 
            className="absolute top-1/2 -right-15 z-10 -translate-y-1/2 bg-white rounded-full
            p-2 shadow-md text-primary hover:bg-gray-100"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};