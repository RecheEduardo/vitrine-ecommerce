import { PiCreditCardBold, PiShieldCheckBold, PiTruckBold } from "react-icons/pi";
import { motion } from 'framer-motion';
import { containerMotionProps, popInItemMotionProps } from '../../variants/animationVariants';

const TextoDestacado: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-bold text-dark-blue">{children}</span>
);

export const TopBar: React.FC = () => (
  <motion.div
    className="container mx-auto hidden md:flex bg-white border-b border-b-gray-100 py-2 justify-center items-center"
    {...containerMotionProps}
  >
    <div className="flex items-center gap-36">
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