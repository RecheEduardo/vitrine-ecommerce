import { PiCreditCardBold, PiShieldCheckBold, PiTruckBold } from "react-icons/pi";
import { motion } from 'framer-motion';
import { containerMotionProps, popInItemMotionProps } from '../../variants/animationVariants';

const TextoDestacado: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-bold text-dark-blue">{children}</span>
);

export const TopBar: React.FC = () => (
  <motion.div
    // itens ficam visiveis a partir de telas médias, e justificados no centro em telas menores
    className="container mx-auto hidden md:flex bg-white border-b border-b-gray-100 py-2 justify-center items-center"
    {...containerMotionProps}
  >
    <div className="flex flex-wrap justify-center items-center md:gap-8 lg:gap-36 font-medium">
      <motion.span className="text-md text-gray-300 flex items-center gap-2" {...popInItemMotionProps}>
        <PiShieldCheckBold size={24} /> Compra <TextoDestacado>100% segura</TextoDestacado>
      </motion.span>

      <motion.span className="text-md text-gray-300 flex items-center gap-2" {...popInItemMotionProps}>
        <PiTruckBold size={24} /> <TextoDestacado>Frete grátis</TextoDestacado> acima de R$ 200
      </motion.span>

      <motion.span className="text-md text-gray-300 flex items-center gap-2" {...popInItemMotionProps}>
        <PiCreditCardBold size={24} /> <TextoDestacado>Parcele</TextoDestacado> suas compras
      </motion.span>
    </div>
  </motion.div>
);