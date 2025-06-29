import { FiFacebook, FiLinkedin, FiInstagram  } from "react-icons/fi";

// componente feito para indexar diferentes listas no footer dinamicamente
const ColunaLinksFooter: React.FC<{ title: string; links: string[] }> = ({ title, links }) => (
  <div className="pb-5 md:pb-0 border-b md:border-0 border-gray-200">
    <h4 className="font-bold text-gray-400 mb-4">{title}</h4>
    
    <ul className="space-y-2">
      {links.map((link, i) => (
        <li key={i}>
          <a href="#" className="text-sm text-gray-400 hover:text-primary
            hover:pl-3 transition-all duration-200"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
)

export const Footer = () => {
  // listas para as 3 seções do footer, iteradas pelo componente ColunaLinksFooter
  const aboutLinks = ["Sobre Nós", "Movimento", "Trablhe Conosco"];
  const supportLinks = ["Suporte", "Fale Conosco", "Perguntas Frequentes"];
  const servicesLinks = ["Termos e Condições", "Política de Privacidade", "Troca e Devolução"];

  return (
    <footer className="bg-gray-100">
      
      {/* footer principal */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-12 md:gap-4">
          
          {/* Coluna da logo e links de midia social */}
          <div className="space-y-7 md:w-1/3 text-center md:text-left">
            <img src="/siteLogo.png" alt="Econverse" className="h-14 mx-auto md:mx-0" />
            
            <p className="text-sm text-gray-400 max-w-sm mx-auto md:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <div className="flex gap-5 justify-center md:justify-start">
              <a href="#" className="text-gray-400 hover:text-primary"><FiInstagram size={28} /></a>
              <a href="#" className="text-gray-400 hover:text-primary"><FiFacebook size={28}/></a>
              <a href="#" className="text-gray-400 hover:text-primary"><FiLinkedin size={28} /></a>
            </div>
          </div>

          {/* linha separando logo das colunas */}
          <div className="hidden md:block w-[2px] bg-gray-200 self-stretch mx-8 lg:mx-15" />

          {/* coluna de links e seções do footer */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 flex-1 sm:text-left">
            <ColunaLinksFooter title="Institucional" links={aboutLinks} />
            <ColunaLinksFooter title="Ajuda" links={supportLinks} />
            <ColunaLinksFooter title="Termos" links={servicesLinks}/>
          </div>

        </div>
      </div>

      {/* seção final abaixo do footer */}
      <div className="bg-white py-4">
        <div className="container mx-auto px-4 text-center text-s text-gray-400">
          <p>
            Feito com ♥ por <a href="https://linkedin.com/in/eduardorechemartins" 
                className="font-bold italic text-dark-blue underline"
                target="_blank"
                rel="noopener noreferrer"
            >
              Eduardo Reche
            </a>
          </p>
        </div>
      </div>

    </footer>
  );
};