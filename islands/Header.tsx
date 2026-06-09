import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

export default function Header() {
  const isNavOpen = useSignal(false);
  const isDarkTheme = useSignal(false);

  useEffect(() => {
    // Check initial theme from html attribute or localStorage
    const currentTheme = document.documentElement.getAttribute("data-theme");
    isDarkTheme.value = currentTheme === "dark";
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkTheme.value ? "light" : "dark";
    isDarkTheme.value = !isDarkTheme.value;
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <header id="inicio">
      <img
        class="logo neon-svg-glow"
        src="/img/iconnovo.svg"
        alt="logo_mateusdsiqueira"
      />
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
        <a href="#home" onClick={() => (isNavOpen.value = false)}>
          Home
        </a>
        <a href="#quemsou" onClick={() => (isNavOpen.value = false)}>
          Quem sou
        </a>
        <a href="#oquefaco" onClick={() => (isNavOpen.value = false)}>
          O que faço
        </a>
        <a href="#contato" onClick={() => (isNavOpen.value = false)}>
          Contato
        </a>
      </nav>
      <div class="header-actions">
        <button
          id="theme-toggle"
          class="theme-toggle neon-red-glow"
          aria-label="Toggle Dark Mode"
          onClick={toggleTheme}
        >
          {isDarkTheme.value ? (
            <svg
              id="theme-icon-dark"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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
              width="24"
              height="24"
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
        <img
          class="menu"
          src="/img/menu.svg"
          alt="menu"
          style="cursor:pointer; width:40px;"
          onClick={() => (isNavOpen.value = true)}
        />
      </div>
    </header>
  );
}
