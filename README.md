<h1 align="center">🏬 Documentação Vitrine Ecommerce 🛍</h1>

Olá!! Seja muito bem vindo ao repositório do meu projeto. Desenvolvi essa landing page de ecommerce como uma forma de demonstrar e aprimorar minhas habilidades no front end com stacks mais modernas. Meu principal objetivo era criar uma vitrine de produtos que não fosse apenas bonita, mas também extremamente performática, responsiva e com uma UX que realmente tivesse destaque.

# Ao ponto: Qual problema meu projeto resolve?

No mundo do ecommerce, a primeira impressão conta muito. Vi que muitas lojas virtuais acabam oferecendo uma experiência lenta, com interfaces que não se adaptam bem nos celulares e que, no geral, são pouco (ou nada) intuitivas. Vendo isso, criar um projeto que atacasse esses pontos se tornou uma ideia interessante pra mim, focando em uma navegação fluida, carregamento quase instantâneo e um design que realmente valorizasse a loja, fazendo com que o usuário se sinta à vontade para explorar.

# As Tecnologias que Escolhi

### Para dar vida nesse meu projeto, optei por um conjunto de stacks que considero modernas e altamente produtivas.

---

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" height="35"  /><img src="https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&logo=Vite&logoColor=white" height=35/> 

Escolhi o React pela sua capacidade de componentização, o que me permitiu quebrar a interface em pequenas partes reutilizáveis. Decidi usar o Vite como ferramenta de build, e a experiência foi muito satisfatória. O ambiente de desenvolvimento é extremamente rápido, e o HMR faz com que as alterações no código sejam refletidas na tela quase que instantaneamente (tipo um live server só que com frameworks imensos, como o react).

##

<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white" height=35/> 
Para mim, usar TypeScript é uma decisão de qualidade. Adicionar tipagem estática ao código me deu muito mais segurança e clareza pra ir commitando sem medo, ajudando a evitar bugs antes mesmo de eles acontecerem. Isso tornou o código mais robusto e fácil de dar manutenção.

##

<img src="https://img.shields.io/badge/TailwindCSS-06B6D4.svg?style=for-the-badge&logo=TailwindCSS&logoColor=white" height=35/> 
Na parte de estilização, minha escolha foi o TailwindCSS. A abordagem utility-first me deu uma agilidade impressionante para criar layouts complexos e, principalmente, responsivos. Consegui construir toda a interface diretamente no JSX, apenas com algumas configs em arquivos .css, o que acelerou muito o desenvolvimento.

##

<img src="https://img.shields.io/badge/Framer%20Motion-EF007A.svg?style=for-the-badge&logo=Framer&logoColor=white" height=35/> 
Boas animações são essenciais para uma boa UX. Usei a Framer Motion para criar transições suaves e interações que dão vida à página, e a forma que ele roda é muito intuitiva.

##

<img src="https://img.shields.io/badge/Swiper.js-6332F6.svg?style=for-the-badge&logo=Swiper&logoColor=white" height=35/> 
Swiper.js: Para os carrosséis, implementei o Swiper.js. É uma biblioteca pra menus de slide, muito flexível e com ótimo suporte para gestos em telas de toque, o que era um requisito importante visando mobile por exemplo.

# A Estrutura do Projeto

Pensei em uma estrutura de pastas que fosse limpa, intuitiva e que pudesse crescer sem virar uma bagunça. A ideia é separar tudo por responsabilidade!!

```
/src
|-- /components
|   |-- /layout       # Componentes da estrutura principal (Header, Footer)
|   |-- /sections     # Seções da página (Hero, Slider de Produtos)
|   |-- /ui           # Componentes de interface genéricos (Cards, Modal)
|-- /hooks            # Meus hooks customizados
|-- /types            # Definições de tipos do TypeScript
|-- /variants         # Variantes de animação da Framer Motion
|-- App.tsx           # Componente raiz
|-- main.tsx          # Ponto de entrada da aplicação
```

* **`components/layout`**: Aqui ficam os blocos que montam o "esqueleto" de todas as páginas.
* **`components/sections`**: Cada grande área da landing page, como a `HeroSection` ou a `Newsletter`, tem seu próprio componente aqui.
* **`components/ui`**: Criei esta pasta para componentes que eu poderia reutilizar em qualquer lugar, como o `CardProduto`.
* **`hooks`**: Toda a lógica de estado mais complexa ou que se conecta a APIs externas, eu isolei em hooks customizados.
* **`types`**: Para garantir que os dados que fluem pela aplicação tenham o formato correto, criei interfaces TypeScript, como a `Produto`.
* **`variants`**: Decidi centralizar as animações aqui para manter um padrão visual e facilitar a reutilização.

# Features e Decisões de Código

Vou detalhar algumas das partes que considero mais importantes e as decisões que tomei durante o desenvolvimento.

## Consumo da API com um Hook Customizado

Pra buscar os produtos, achei que a melhor abordagem seria criar meu próprio hook, o `useProducts`. Fazer isso me permitiu isolar toda a lógica de comunicação com a API, incluindo o tratamento de estados de carregamento e erro, em um só lugar. Assim, o componente que exibe os produtos fica muito mais limpo e focado apenas na renderização.

```ts
// src/hooks/useProducts.ts

export const useProducts = () => {
  // ... estados de products, loading e error
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(API_URL);
        // ... tratamento da resposta e de erros
      } catch (err) {
        // ... tratamento de erros
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
}
```

Um grande desafio que enfrentei foi o CORS ao fazer o deploy na Vercel. Para resolver, usei um *rewrite* no `vercel.json`. Essa foi uma solução que me permitiu "mascarar" a chamada para a API externa, fazendo parecer que ela vinha do meu próprio domínio.

## Slider de Produtos Responsivo e Interativo

O carrossel de produtos é uma peça chave. Usei o Swiper.js, que se integrou perfeitamente com o React. Uma das minhas preocupações era a responsividade. Utilizei a propriedade `breakpoints` do Swiper para definir quantos produtos deveriam aparecer em diferentes tamanhos de tela, garantindo uma boa visualização tanto no desktop quanto no mobile.

```tsx
// trecho de src/components/sections/SliderProdutos.tsx

<Swiper
  // ... outras props
  slidesPerView={1.2} // Em telas muito pequenas, mostra um card e um pedaço do próximo
  breakpoints={{
    640: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  }}
>
  {/* ... Slides ... */}
</Swiper>
```

## Animações Padronizadas com Framer Motion

Para que a experiência fosse mais fluida e profissional, eu queria que as animações tivessem um padrão. Decidi criar um arquivo (`src/variants/animationVariants.ts`) para centralizar todas as variantes de animação. Criei efeitos como `popIn` (um surgimento suave) e `fadeInUp` (aparecer de baixo para cima) e pude reutilizá-los em toda a aplicação.

```ts
// src/variants/animationVariants.ts

// efeito de fade in para cima com spring
export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 30,
    },
  },
};
```

Isso não só manteve a consistência visual, como também deixou o código dos meus componentes muito mais limpo.

## Modal de Compra com Animação

Quando o usuário clica em "COMPRAR", um modal aparece. Para controlar sua exibição, usei um estado no componente pai (`SliderProdutos`) que guarda qual produto foi selecionado. O componente `ModalCompra` então recebe esse produto e uma função para fechá-lo. Para a animação de entrada e saída, usei o componente `AnimatePresence` da Framer Motion, que tornou a transição extremamente suave.

```tsx
// trecho de src/components/ui/ModalCompra.tsx

<AnimatePresence>
  <div className="fixed inset-0 z-50 ...">
    {/* Overlay */}
    <motion.div
      className="absolute inset-0 bg-black/60"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
    />

    {/* Conteúdo do Modal */}
    <motion.div
      className="relative bg-white rounded-lg ..."
      variants={popInVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
        {/* ... */}
    </motion.div>
  </div>
</AnimatePresence>
```

# Como Executar o Projeto

Se quiser ver o projeto rodando na sua máquina, é bem simples:

1. **Clone este repositório:**

```bash
git clone https://github.com/recheeduardo/vitrine-ecommerce.git
```

2. **Entre na pasta do projeto:**

```bash
cd vitrine-ecommerce
```

3. **Instale as dependências (precisa ter o Node.js instalado):**

```bash
npm install
```

4. **Inicie o servidor de desenvolvimento:**

```bash
npm run dev
```

Depois disso, é só abrir o seu navegador em `http://localhost:5173` (ou a porta que o Vite indicar).

# Conclusão

Particularmente foi bem legal trabalhar nesse projeto. Foi uma jornada de arquitetura e código onde pude não só aplicar o que já sabia, mas também me aprofundar em ferramentas e conceitos que considero essenciais para o desenvolvimento frontend moderno. O resultado final me deixa orgulhoso e animado para os próximos desafios. É isso, obrigado pela sua visita!
