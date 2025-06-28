export const NavBar = () => {
    const listaCategorias = [ // passagem direta dos setores por string
      "Supermercado",
      "Livros",
      "Moda",
      "Lançamentos",
      "Ofertas do Dia",
      "Assinatura",
    ];
  
    return (
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <div className="flex items-center gap-8">
            <div className="hidden lg:flex items-center font-semibold gap-32">
              <a href="#" className="py-3 text-sm text-dark-blue">
                Todas as categorias
              </a>
              {listaCategorias.map((item) => ( // map iterando as strings do array, ajudando em manutenções futuras
                <a
                  key={item}
                  href="#"
                  className={"py-3 text-sm text-gray-300 hover:text-dark-blue"}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    );
  };