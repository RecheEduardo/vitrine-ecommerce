import { useRef } from 'react';

// componente do card de cada produto
import { CardProduto } from '../ui/CardProduto';

// elementos da lib swiper para sliders modernos
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// hook que chama a api do JSON de produtos
import { useProducts } from '../../hooks/useProducts';

// icones dos chevron's (setas) dos sliders
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// animação dinamica
import { motion } from 'framer-motion';
import { containerMotionProps, fadeInUpItemMotionProps, popInItemMotionProps } from '../../variants/animationVariants';

export const SliderProdutos: React.FC<{title: string}> = ({ title }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  
  const { products, loading, error } = useProducts();

  // loading & error handling do hook feito para o fetch do JSON de produtos
  if (loading) return <div className="text-center py-12">Carregando produtos...</div>;
  if (error) return <div className="text-center py-12 text-red-500">Erro ao carregar produtos: {error}</div>;

  return (
    <motion.section className="py-6 md:py-12" {...containerMotionProps}>
      <div className="container mx-auto px-2 md:px-0">

        {/* titulo customizavel do slider */}
        <motion.div className="flex items-center gap-4 md:gap-12" {...popInItemMotionProps} viewport={{ once: true, amount: 0.4 }}>
            <div className="flex-1 h-px bg-gray-200"></div>
            {/* Tamanho do texto ajustado para mobile */}
            <span className="text-2xl md:text-4xl font-bold text-dark-blue text-center">{title}</span>
            <div className="flex-1 h-px bg-gray-200"></div>
        </motion.div>

        {/* menu de categorias de produtos */}
        <motion.div 
          // Scroll horizontal em telas pequenas, e justificado no centro em telas maiores
          className="flex overflow-x-auto lg:justify-between gap-6 py-4 md:py-8 px-4 md:px-12 text-md md:text-lg text-gray-400"
          {...fadeInUpItemMotionProps}
        >
          <a href="#" className="text-primary font-bold border-b-2 border-primary pb-1 flex-shrink-0">Celular</a>
          <a href="#" className="hover:text-primary flex-shrink-0">Acessórios</a>
          <a href="#" className="hover:text-primary flex-shrink-0">Tablets</a>
          <a href="#" className="hover:text-primary flex-shrink-0">Notebooks</a>
          <a href="#" className="hover:text-primary flex-shrink-0">TVs</a>
          <a href="#" className="hover:text-primary flex-shrink-0">Ver todos</a>
        </motion.div>
        
        {/* slider de produtos iterando sobre o JSON */}
        <div className="relative pt-5 md:pt-0 ">
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={1.2} // Mostra 1 card e um pouco do próximo em telas muito pequenas

            // referencia os elementos puxando do hook useRef
            navigation={{ 
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}

            onBeforeInit={(swiper) => {  
              // @ts-ignore
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}

            // define a partir da width da tela quantos elementos vão aparecer
            breakpoints={{ 
              // sm
              640: { slidesPerView: 2 },
              // md
              768: { slidesPerView: 3 },
              // lg
              1024: { slidesPerView: 4 },
            }}
          >
            {products && products.map((product) => (  // renderiza só se os produtos forem carregados
              <SwiperSlide key={product.productName} className="h-auto pb-6 px-1 md:px-3">
                <motion.div {...popInItemMotionProps}>  
                  <CardProduto product={product} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* setas de navegação - Ocultas em telas menores */}
          <button ref={navigationPrevRef} 
            className="absolute top-1/2 -left-15 z-10 -translate-y-1/2 bg-white rounded-full
            p-2 shadow-md text-primary hover:bg-gray-100 hidden md:flex" // Oculto em mobile
          >
            <FaChevronLeft size={24} />
          </button>
          
          <button ref={navigationNextRef} 
            className="absolute top-1/2 -right-15 z-10 -translate-y-1/2 bg-white rounded-full
            p-2 shadow-md text-primary hover:bg-gray-100 hidden md:flex" // Oculto em mobile
          >
            <FaChevronRight size={24} />
          </button>
        </div>

      </div>
    </motion.section>
  );
};