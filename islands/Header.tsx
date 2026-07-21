import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import RecepcionistaSiqueira from "./RecepcionistaSiqueira.tsx";
import { isRecepcionistaOpen } from "../signals/recepcionista.ts";
import { audioVolume } from "../signals/audio.ts";

export default function Header() {
  const isNavOpen = useSignal(false);
  const isDarkTheme = useSignal(false);
  const isScrolled = useSignal(false);

  useEffect(() => {
    // Check initial theme from html attribute or localStorage
    const currentTheme = document.documentElement.getAttribute("data-theme");
    isDarkTheme.value = currentTheme === "dark";

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 20;
    };
    window.addEventListener("scroll", handleScroll);
    
    // Trigger once on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkTheme.value ? "light" : "dark";
    isDarkTheme.value = !isDarkTheme.value;
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      <header id="inicio" class={isScrolled.value ? "header-scrolled" : ""}>
        <div class="header-left" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <img
            class="logo neon-svg-glow"
            src="/img/iconnovo.svg"
            alt="logo_mateusdsiqueira"
          />
          <img
            class="menu"
            src="/img/menu.svg"
            alt="menu"
            style={{ cursor: "pointer", width: "30px" }}
            onClick={() => (isNavOpen.value = true)}
          />
        </div>

      <div class="header-actions" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {/* 1. Global Volume (Slider) */}
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <input 
            type="range" 
            min="0" 
            max="1" 
            step="0.01" 
            value={audioVolume.value} 
            onInput={(e) => audioVolume.value = parseFloat((e.target as HTMLInputElement).value)}
            style={{ width: "60px", cursor: "pointer", accentColor: "var(--principal)" }}
            title="Ajustar Volume"
            class="hidden md:block"
          />
          <button
            onClick={() => audioVolume.value = audioVolume.value > 0 ? 0 : 0.3}
            style={{ background: "transparent", border: "none", cursor: "pointer", display: "flex", alignItems: "center", padding: "5px", color: "var(--text-color, #ccc)" }}
            title={audioVolume.value === 0 ? "Ativar Som" : "Mudo"}
          >
            {audioVolume.value > 0 ? (
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
            ) : (
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
            )}
          </button>
        </div>

        {/* 2. Theme Toggle (Discreet) */}
        <button
          id="theme-toggle"
          class="theme-toggle"
          aria-label="Toggle Dark Mode"
          onClick={toggleTheme}
          style={{ background: "transparent", border: "none", cursor: "pointer", display: "flex", alignItems: "center", padding: "5px", color: "var(--text-color, #ccc)" }}
        >
          {isDarkTheme.value ? (
            <svg
              id="theme-icon-dark"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          ) : (
            <svg
              id="theme-icon-light"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          )}
        </button>

        {/* 3. Recepcionista no Extremo Direito com Neon */}
        <button
          onClick={() => (isRecepcionistaOpen.value = true)}
          style={{ background: "transparent", border: "none", cursor: "pointer", display: "flex", alignItems: "center", padding: "5px" }}
          title="Assistente de Voz"
        >
          <img src="/img/minimal_logo.svg" alt="Assistente" class="neon-svg-glow" style={{ width: "24px" }} />
        </button>
      </div>
    </header>
    <RecepcionistaSiqueira />
    <nav
      id="menu"
      class="sidenav"
      style={{ width: isNavOpen.value ? "250px" : "0" }}
    >
      <a
        href="javascript:void(0)"
        class="closebtn"
        onClick={() => (isNavOpen.value = false)}
      >
        &times;
      </a>
      <a href="/#home" onClick={() => (isNavOpen.value = false)}>
        Início
      </a>
      <a href="/#freela" onClick={() => (isNavOpen.value = false)}>
        Serviços / Freelas
      </a>
      <a href="/#portfolio" onClick={() => (isNavOpen.value = false)}>
        Portfólio
      </a>
      {/* <a href="/blog" onClick={() => (isNavOpen.value = false)}>
        Análises
      </a> */}
    </nav>
    </>
  );
}
