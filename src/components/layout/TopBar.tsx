import { PiCreditCardBold, PiShieldCheckBold, PiTruckBold } from "react-icons/pi";

const TextoDestacado: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-bold text-dark-blue">{children}</span>
);

export const TopBar = () => {
  return (
    <div className="container mx-auto hidden md:flex bg-white border-b 
      border-b-gray-100 py-2 justify-center items-center"
    >
      <div className="flex items-center gap-36">

        <span className="text-md text-gray-300 flex items-center gap-2">
          <PiShieldCheckBold  size={24}/> 
          Compra <TextoDestacado>100% segura</TextoDestacado>
        </span>

        <span className="text-md text-gray-300 flex items-center gap-2">
          <PiTruckBold size={24}/> 
          <TextoDestacado>Frete grátis</TextoDestacado> acima de R$ 200
        </span>

        <span className="text-md text-gray-300 flex items-center gap-2">
          <PiCreditCardBold size={24}/> 
          <TextoDestacado>Parcele</TextoDestacado> suas compras
        </span>
        
      </div>
    </div>
  );
};