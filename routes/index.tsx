import Header from "../islands/Header.tsx";
import Footer from "../components/Footer.tsx";
import Carousel3D, { CarouselItem } from "../islands/Carousel3D.tsx";
import DropdownShowcase, {
  ShowcaseDataset,
} from "../islands/DropdownShowcase.tsx";
import HeroInteractive from "../islands/HeroInteractive.tsx";
import TimelineParallax from "../islands/TimelineParallax.tsx";
import SoundEffects from "../islands/SoundEffects.tsx";
import BackgroundMusic from "../islands/BackgroundMusic.tsx";
const habilidadesItems: CarouselItem[] = [
  {
    id: "html",
    title: "HTML5",
    image: "/img/habilidades/html.svg",
  },
  {
    id: "css",
    title: "CSS3",
    image: "/img/habilidades/css.svg",
  },
  {
    id: "figma",
    title: "Figma",
    image: "/img/habilidades/figma.svg",
  },
];
const logosItems: CarouselItem[] = [
  {
    id: "martelar",
    title: "Martelar",
    image: "/img/logosportifolio/martelar.png",
    description: "A Martelar foi a primeira logo que desenvolvi, sob a pressão de uma turma de adolescentes no ensino médio, em um projeto da escola chamado 'Empresa', no qual criávamos uma empresa fictícia (no nosso caso, uma empresa de ferragens). Este primeiro logo utiliza conceitos de gestalt e forte simbologia. Além disso, o nome está escrito em espaço negativo e possui efeito de profundidade. O projeto foi o resultado prático de cursos de Photoshop, Dreamweaver e Fireworks que eu fazia aos finais de semana na época do ensino médio.",
  },
  {
    id: "moviagem",
    title: "Moviagem",
    image: "/img/logosportifolio/moviagem.png",
    description: "A logo da Moviagem nasceu em um projeto universitário de Elicitação de Requisitos, para um sistema de viagens (o nome foi sugestão minha e unanimidade!). Apesar de visualmente simples, é uma verdadeira obra de arte recheada de conceitos e uma das minhas criações favoritas. A inspiração uniu o livro 'O Corpo Fala', a psicologia geométrica de Heider & Simmel e as microexpressões faciais inspiradas no canal <a href='https://www.youtube.com/@Metaforando' target='_blank' rel='noopener noreferrer' style='color: var(--principal); text-decoration: underline;'>Metaforando</a>. O design bebe do visagismo de animações (onde heróis são redondos e vilões usam ângulos afiados para gerar alerta). Olhando com atenção, o símbolo forma não apenas um aviãozinho de papel — cuja asa esconde perfeitamente as letras 'M' e 'V' —, mas também um rosto com um 'sorrisinho' agressivo e malicioso. Subvertendo o perigo desses traços triangulares em velocidade pura, a carga psicológica gerada por apenas algumas linhas causou uma reação fascinante quando a apresentei para a turma.",
  },
  {
    id: "coldstorm",
    title: "ColdStorm",
    image: "/img/logosportifolio/coldstorm.png",
    description: "A logo ColdStorm foi desenvolvida para um projeto de iniciação científica que <a href='https://g1.globo.com/df/distrito-federal/noticia/2019/07/22/estudantes-do-df-criam-micro-ondas-ao-contrario-capaz-de-gelar-bebidas-em-ate-um-minuto.ghtml' target='_blank' rel='noopener noreferrer' style='color: var(--principal); text-decoration: underline;'>teve até matéria no G1</a>. Anteriormente, a logo era um floco de neve que utilizava o mesmo efeito de profundidade da Martelar. Com o tempo, assumiu uma forma mais simbólica à medida que comecei a entender mais sobre traços. A gestalt presente consegue criar as letras 'C' de Cold e 'S' de Storm, enquanto o símbolo do trovão representa a tempestade. Mais uma vez, um trabalho forte em simbolismo e gestalt.",
  },
  {
    id: "movimente",
    title: "Movimente",
    image: "/img/logosportifolio/logomovimente.png",
    description: "A logo da Movimente foi criada logo após eu e alguns amigos do ensino médio iniciarmos uma agência de social media chamada <a href='https://www.instagram.com/digidrawart/' target='_blank' rel='noopener noreferrer' style='color: var(--principal); text-decoration: underline;'>Digi Draw Art</a>. A agência existe até hoje, focada em alavancar a lucratividade de empresas do ramo alimentício. Sobre a Movimente (uma empresa de pilates): a logo apresenta várias curvas que lembram uma senoide, uma forte representação de movimento. O símbolo principal também lembra uma pessoa sentada com um braço apoiado atrás. É possível enxergar as letras 'M' de Movimente e 'V' diversas vezes na imagem. A bolinha representa tanto a cabeça da pessoa quanto a clássica bola suíça do pilates. Mais um trabalho marcado por forte simbolismo.",
  },
  {
    id: "minimal",
    title: "Minimal",
    image: "/img/minimal_logo.svg",
    description: "A Minimal Logo foi a primeira logo que criei para minha própria agência, logo após fazer um <a href='https://gabrielsilvestri.com.br/' target='_blank' rel='noopener noreferrer' style='color: var(--principal); text-decoration: underline;'>curso de UI</a>, sendo fortemente influenciado pelo design minimalista. Como acabou não representando tão bem a ideia inicial da agência, optei por não usá-la oficialmente na época. No entanto, o seu círculo caótico se encaixou perfeitamente como o ícone da assistente de voz deste próprio site! Ele representa um espectro vocal com oscilações aleatórias, simulando as variações naturais da voz humana.",
  },
  {
    id: "barbershop",
    title: "Barbershop",
    image: "/img/logosportifolio/barbershop.jpg",
    description: "A logo da Barbershop foi desenvolvida para um sistema web de gerenciamento de barbearias, criado em uma disciplina do curso de Engenharia de Software chamada 'Desenvolvimento de Software'. A identidade visual foi fortemente inspirada na clássica estética das barbearias dos anos 50. Como curiosidade, o ícone central foi criado a partir da vetorização de uma fotografia de <a href='https://www.linkedin.com/in/colemar-aguiar/' target='_blank' rel='noopener noreferrer' style='color: var(--principal); text-decoration: underline;'>Colemar Aguiar</a>, um dos integrantes do nosso grupo no projeto!",
  },
  {
    id: "site-logo",
    title: "Siqueira",
    image: "/img/iconnovo.svg",
    description: "Por último, mas não menos importante, a logo Siqueira. Siqueira é o meu nome, e o símbolo representa a letra 'S' desenhada no formato de uma onda quadrada (square wave) — a representação visual clássica dos sinais digitais e dos bits de computador. É a junção minimalista e direta da minha identidade com a minha essência na tecnologia.",
  },
];
const showcaseDatasets: ShowcaseDataset[] = [
  {
    id: "logos",
    title: "Logos",
    items: logosItems,
    text: "",
  },
  {
    id: "habilidades",
    title: "Habilidades",
    items: habilidadesItems,
    text:
      "Confira as minhas principais habilidades técnicas. Foco em desenvolvimento frontend com tecnologias modernas e prototipagem de interfaces para entregar as melhores experiências.",
  },
];
const portfolioItems: CarouselItem[] = [
  {
    id: "webdesign",
    title: "Web Design",
    description:
      "Me responsabilizo em criar páginas, organizar layouts e selecionar tipografias e cores. Nesta área, sou capaz de criar landing pages que são páginas únicas de divulgação de serviço ou produto, como no caso desta página que você está vendo agora. E também, sites corporativos, blogs e até lojas virtuais",
    image: "/img/website.svg",
    link: "#",
  },
  {
    id: "frontend",
    title: "Interfaces Web para Cliente",
    description:
      "Também sou desenvolvedor frontend. O frontend é a parte gráfica que irá aparecer para o cliente, em outras palavras, foca na criação das telas. Nesse sentido, sempre busco o maior nível de fidelidade possível focando na interação e experiência do usuário.",
    image: "/img/code.png",
    link: "#",
  },
  {
    id: "backend",
    title: "Programação da regra negocial",
    description:
      "Sou capaz também de programar a regra negocial de sites e sistemas web. Fazendo inclusões em bases de dados e criando funções úteis para seu negócio.",
    image: "/img/regranegocial.svg",
    link: "#",
  },
  {
    id: "apps",
    title: "Aplicativos",
    description:
      "Por fim, também consigo desenvolver aplicativos para seu negócio. Podendo ser para android ou IOS.",
    image: "/img/aplicativo.svg",
    link: "#",
  },
];
export default function Home() {
  return (
    <>
      <SoundEffects />
      <BackgroundMusic />
      <Header />
      <div class="div-cotainer">
        <article>
          <HeroInteractive />
          <section
            id="habilidades"
            style={{
              padding: "40px 20px",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            <h3
              class="mt-8 mb-8"
              style={{
                textAlign: "left",
                textTransform: "uppercase",
                color: "var(--principal)",
              }}
            >
              Skills & Identidade
            </h3>
            <DropdownShowcase datasets={showcaseDatasets} />
          </section>
          <TimelineParallax />
          <section
            id="freela"
            style={{
              backgroundColor: "var(--bg-secondary)",
              padding: "80px 0",
              margin: "60px 0",
            }}
          >
            <style>
              {`
              .freela-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 3rem;
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 20px;
                color: #ffffff;
              }
              .freela-text {
                flex: 1;
                width: 100%;
                text-align: left;
              }
              .freela-list {
                text-align: left;
              }
              .freela-img {
                flex: 1;
                width: 100%;
                display: flex;
                justify-content: center;
                margin-top: 2rem;
              }
              @media (min-width: 768px) {
                .freela-container {
                  flex-direction: row;
                  align-items: flex-start;
                }
                .freela-text {
                  text-align: left;
                }
                .freela-img {
                  justify-content: flex-end;
                  margin-top: 0;
                }
              }
            `}
            </style>
            <h2>DESENVOLVIMENTO WEB & DESIGN (FREELANCE)</h2>
            <div class="freela-container">
              <div class="freela-text">
                <p style={{ marginBottom: "20px" }}>
                  Transformo a identidade do seu negócio em uma plataforma
                  digital de alta conversão, unindo design exclusivo no Figma à
                  robustez do código.
                </p>
                <ul
                  class="freela-list"
                  style={{
                    listStyleType: "square",
                    paddingLeft: "20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <li>
                    <strong>Identidade Visual:</strong> Criação de logos, paletas de cores e manuais da marca para um posicionamento único.
                  </li>
                  <li>
                    <strong>Sites Institucionais & Landing Pages:</strong> Páginas velozes e otimizadas para o Google (SEO) que convertem visitantes em clientes.
                  </li>
                  <li>
                    <strong>E-commerces & Lojas Virtuais:</strong> Sistemas de vendas seguros, rápidos e prontos para faturar.
                  </li>
                  <li>
                    <strong>Blogs & Portais de Conteúdo:</strong> Plataformas customizadas com gerenciamento fácil de conteúdo.
                  </li>
                  <li>
                    <strong>Sistemas Web:</strong> Plataformas sob medida para a regra de negócio da sua empresa.
                  </li>
                  <li>
                    <strong>Aplicativos e Dashboards Customizados:</strong> Soluções sob medida para automatizar ou visualizar os dados da sua empresa.
                  </li>
                </ul>
                <br />
                <a href="#contato" style={{ textDecoration: "none" }}>
                  <button
                    type="button"
                    name="button"
                    class="neon-red-glow"
                    style={{
                      margin: 0,
                      padding: "12px 30px",
                      background: "transparent",
                      color: "var(--principal)",
                      border: "2px solid var(--principal)",
                      textTransform: "uppercase",
                      height: "auto",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      lineHeight: "1",
                    }}
                  >
                    IMPULSIONAR NEGÓCIO
                  </button>
                </a>
              </div>
              <div class="freela-img">
                <img
                  src="/img/website.svg"
                  alt="website"
                  style={{ width: "100%", maxWidth: "450px", height: "auto" }}
                />
              </div>
            </div>
          </section>
          <section id="portfolio" style={{ paddingBottom: "100px" }}>
            <h2 style={{ textAlign: "left", textTransform: "uppercase" }}>
              O QUE FAÇO
            </h2>
            <div class="mt-16 mb-16 max-w-6xl mx-auto flex justify-center">
              {/* Carrossel do Portfólio lado a lado */}
              <Carousel3D items={portfolioItems} sideBySide={true} whiteBg={true} />
            </div>
          </section>
        </article>
        <Footer />
      </div>
    </>
  );
}