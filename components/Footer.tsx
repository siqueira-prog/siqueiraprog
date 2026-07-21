export default function Footer() {
  return (
    <footer id="contato">
      <h2>FALE COMIGO:</h2>
      <a href="https://wa.me/5561994007470">
        <button
          id="whatsapp"
          type="button"
          name="button"
          class="neon-red-glow"
        >
          <img src="/img/whatsapp.svg" alt="whatsapp" />WhatsApp
        </button>
      </a>
      <a href="https://t.me/">
        <button
          id="telegram"
          type="button"
          name="button"
          class="neon-red-glow"
        >
          <img src="/img/telegram.svg" alt="telegram" />Telegram
        </button>
      </a>
      <form action="#" method="post" style={{ maxWidth: "600px", margin: "40px auto", width: "100%" }}>
        <fieldset>
          <label for="fname">NOME:</label>
          <br />
          <input
            type="text"
            id="nome"
            name="fnome"
            placeholder="Digite aqui"
          />
          <br />
        </fieldset>
        <fieldset>
          <label for="email">EMAIL:</label>
          <br />
          <input
            type="email"
            id="email"
            name="femail"
            placeholder="exemplo@email.com"
          />
          <br />
        </fieldset>
        <fieldset>
          <label for="telefone">TELEFONE:</label>
          <br />
          <input
            type="tel"
            id="tele"
            name="ftele"
            placeholder="(--) 999999999"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
          />
          <br />
        </fieldset>
        <fieldset>
          <label for="assunto">ASSUNTO:</label>
          <br />
          <input
            type="text"
            id="assunto"
            name="fassunto"
            placeholder="Digite aqui"
          />
          <br />
        </fieldset>
        <fieldset>
          <label for="mensagem">MENSAGEM:</label>
          <br />
          <textarea
            name="message"
            rows={10}
            cols={30}
            placeholder="Digite aqui:"
          >
          </textarea>
          <br />
        </fieldset>
        <button id="enviar" type="submit" class="neon-red-glow">
          ENVIAR
        </button>
      </form>
      <div class="footer-container">
        <nav id="menu-footer">
          <h3>Menu</h3>
          <ul>
            <a href="/#inicio">
              <li>Home</li>
            </a>
            <a href="/#quemsou">
              <li>Quem sou</li>
            </a>
            <a href="/#oquefaco">
              <li>O que faço</li>
            </a>
            <a href="/#portfolio">
              <li>Portfólio</li>
            </a>
            <a href="/blog">
              <li>Blog</li>
            </a>
            <a href="#contato">
              <li>Contato</li>
            </a>
          </ul>
        </nav>
        <nav id="redesocial">
          <h3>Rede Social</h3>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/mateus-de-siqueira-silva/"
                target="_blank"
              >
                <img src="/img/linkedin.png" alt="linkedin" />
              </a>
              <a
                href="https://www.linkedin.com/in/mateus-de-siqueira-silva/"
                target="_blank"
              >
                <span class="paragrafrodape">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://pt-br.facebook.com/people/Mateus-De-Siqueira-Silva/100009665734178"
                target="_blank"
              >
                <img src="/img/facebook.png" alt="facebook" />
              </a>
              <a
                href="https://pt-br.facebook.com/people/Mateus-De-Siqueira-Silva/100009665734178"
                target="_blank"
              >
                <span class="paragrafrodape">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/siqueiraprog/"
                target="_blank"
              >
                <img src="/img/instagram.png" alt="instagram" />
              </a>
              <a
                href="https://www.instagram.com/siqueiraprog/"
                target="_blank"
              >
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
          <img src="/img/telefone.png" alt="telefone" />
          <p>Telefone para contato:</p>
          <p class="paragrafrodape">(61) 998747470</p>
        </li>
        <li>
          <img src="/img/email.png" alt="email" />
          <p>Email para contato:</p>
          <p>siqueiraprog@gmail.com</p>
        </li>
      </ul>
    </footer>
  );
}
