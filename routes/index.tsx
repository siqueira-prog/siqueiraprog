import Header from "../islands/Header.tsx";
import Carousel3D, { CarouselItem } from "../islands/Carousel3D.tsx";

const habilidadesItems: CarouselItem[] = [
  {
    id: "html",
    title: "HTML5",
    image: "/img/html.svg",
  },
  {
    id: "css",
    title: "CSS3",
    image: "/img/css.svg",
  },
  {
    id: "figma",
    title: "Figma",
    image: "/img/figma.svg",
  },
];

const portfolioItems: CarouselItem[] = [
  {
    id: "proj1",
    title: "Site Institucional",
    description: "Desenvolvimento de site corporativo com design responsivo.",
    image: "/img/website.svg",
    link: "#",
  },
  {
    id: "proj2",
    title: "Dashboard de Dados",
    description: "Interface para análise de dados complexos com gráficos interativos.",
    image: "/img/code.png",
    link: "#",
  },
  {
    id: "proj3",
    title: "Aplicativo Mobile",
    description: "UX/UI Design para um aplicativo financeiro de ponta.",
    image: "/img/aplicativo.svg", // Using the available aplicativo.svg
    link: "#",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <div class="div-cotainer">
        <article>
          <section id="home">
            <div id="block">
              <p class="home-title">Siqueira ou se não queira. É</p>
              <img id="name" class="neon-svg-glow" src="/img/name-novo.svg" alt="Mateus de Siqueira" />
              <a href="#contato">
                <button type="button" name="button" class="neon-red-glow">
                  ENTRE EM CONTATO
                </button>
              </a>
            </div>
          </section>
          
          <section id="quemsou">
            <h2>QUEM SOU</h2>
            <div class="apresentacao">
              <div class="coluna">
                <img
                  class="eu"
                  src="/img/logotipo-novo.svg"
                  alt="Mateus de Siqueira"
                  style={{ width: "300px", display: "block", margin: "auto" }}
                />
              </div>
              <div class="coluna">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim quis
                  elementum parturient dignissim. Quisque eu sagittis ac senectus
                  mauris, vitae non in. Porttitor quis tincidunt semper iaculis.
                  Auctor nam quis elit aliquet tristique amet.
                </p>
                <h3 class="mt-8 mb-4">Habilidades em:</h3>
                {/* Carrossel de Habilidades Substituindo as Bolinhas Estáticas */}
                <Carousel3D items={habilidadesItems} small={true} />
              </div>
            </div>
          </section>

          <section id="oquefaco">
            <h2>O QUE FAÇO</h2>
            <div class="duas-colunas">
              <div class="colunamargem">
                <h3>WEB DESIGN</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim quis
                  elementum parturient dignissim. Quisque eu sagittis ac senectus
                  mauris, vitae non in. Porttitor quis tincidunt semper iaculis.
                  Auctor nam quis elit aliquet tristique amet.
                </p>
              </div>
              <div class="colunamargem">
                <img src="/img/website.svg" alt="website" style={{ width: "250px" }} />
              </div>
            </div>
            <div class="linha"></div>
            <div class="duas-colunas">
              <div class="colunamargem">
                <h3>FRONTEND</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim quis
                  elementum parturient dignissim. Quisque eu sagittis ac senectus
                  mauris, vitae non in. Porttitor quis tincidunt semper iaculis.
                  Auctor nam quis elit aliquet tristique amet.
                </p>
              </div>
              <div class="colunamargem">
                <img src="/img/code.png" alt="code" style={{ width: "250px" }} />
              </div>
            </div>
          </section>

          <section id="portfolio">
            <h2>PORTFÓLIO</h2>
            <div class="mt-8 mb-16">
              {/* Carrossel do Portfólio */}
              <Carousel3D items={portfolioItems} small={false} />
            </div>
          </section>
        </article>
        
        <footer id="contato">
          <h2>FALE COMIGO:</h2>
          <a href="https://wa.me/5561994007470">
            <button id="whatsapp" type="button" name="button" class="neon-red-glow">
              <img src="/img/whatsapp.svg" alt="whatsapp" />WhatsApp
            </button>
          </a>
          <a href="https://t.me/">
            <button id="telegram" type="button" name="button" class="neon-red-glow">
              <img src="/img/telegram.svg" alt="telegram" />Telegram
            </button>
          </a>
          <form action="#" method="post">
            <fieldset>
              <label for="fname">NOME:</label><br />
              <input type="text" id="nome" name="fnome" placeholder="Digite aqui" /><br />
            </fieldset>
            <fieldset>
              <label for="email">EMAIL:</label><br />
              <input type="email" id="email" name="femail" placeholder="exemplo@email.com" /><br />
            </fieldset>
            <fieldset>
              <label for="telefone">TELEFONE:</label><br />
              <input
                type="tel"
                id="tele"
                name="ftele"
                placeholder="(--) 999999999"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              /><br />
            </fieldset>
            <fieldset>
              <label for="assunto">ASSUNTO:</label><br />
              <input type="text" id="assunto" name="fassunto" placeholder="Digite aqui" /><br />
            </fieldset>
            <fieldset>
              <label for="mensagem">MENSAGEM:</label><br />
              <textarea name="message" rows={10} cols={30} placeholder="Digite aqui:"></textarea><br />
            </fieldset>
            <button id="enviar" type="submit" class="neon-red-glow">ENVIAR</button>
          </form>
          <div class="footer-container">
            <nav id="menu-footer">
              <h3>Menu</h3>
              <ul>
                <a href="#inicio"><li>Home</li></a>
                <a href="#quemsou"><li>Quem sou</li></a>
                <a href="#oquefaco"><li>O que faço</li></a>
                <a href="#portfolio"><li>Portólio</li></a>
                <a href="#contato"><li>Contato</li></a>
              </ul>
            </nav>
            <nav id="redesocial">
              <h3>Rede Social</h3>
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/mateus-de-siqueira-silva/" target="_blank">
                    <img src="/img/linkedin.png" alt="linkedin" /> 
                  </a>
                  <a href="https://www.linkedin.com/in/mateus-de-siqueira-silva/" target="_blank">
                    <span class="paragrafrodape">Linkedin</span> 
                  </a>
                </li>
                <li>
                  <a href="https://pt-br.facebook.com/people/Mateus-De-Siqueira-Silva/100009665734178" target="_blank">
                    <img src="/img/facebook.png" alt="facebook" />
                  </a>
                  <a href="https://pt-br.facebook.com/people/Mateus-De-Siqueira-Silva/100009665734178" target="_blank">
                    <span class="paragrafrodape">Facebook</span> 
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/siqueiraprog/" target="_blank">
                    <img src="/img/instagram.png" alt="instagram" />
                  </a>
                  <a href="https://www.instagram.com/siqueiraprog/" target="_blank">
                    <span class="paragrafrodape">Instagram</span>
                  </a>
                </li>
                <li>
                  <img src="/img/twitter.png" alt="twitter" />Twitter
                </li>
                <li>
                  <img src="/img/github.png" alt="github" />Github
                </li>
              </ul>
            </nav>
          </div>
          <ul id="nota-contato">
            <li>
              <img src="/img/telefone.png" alt="linkedin" />
              <p>Telefone para contato:</p>
              <p class="paragrafrodape">(61) 998747470</p>       
            </li>
            <li>
              <img src="/img/email.png" alt="facebook" />
              <p>Email para contato:</p>
              <p>siqueiraprog@gmail.com</p>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}
