import { useEffect, useRef } from "preact/hooks";

export default function HeroInteractive() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      // Calculate mouse position relative to the section
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      heroRef.current.style.setProperty("--mouse-x", `${x}px`);
      heroRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    const section = heroRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (section) {
        section.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <section id="home" ref={heroRef} class="interactive-glow">
      <div
        id="block"
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0 20px",
          boxSizing: "border-box",
          width: "100%",
        }}
      >
        <p
          class="home-title"
          style={{
            marginBottom: "20px",
            marginTop: "40px",
            letterSpacing: "1px",
          }}
        >
          Siqueira ou se não queira. É...
        </p>
        <svg
          id="name"
          class="neon-svg-glow"
          width="100%"
          viewBox="0 0 857 162"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ maxWidth: "700px", margin: "20px 0" }}
        >
          <path
            d="M110 0V29.0213H5V79.6766H110V124L5 123.621L5 157H143V39H176V157H209V39H299V133L332 152.5V95.75V39H365V129H397V39H428V157H461V39H559.06V61H491V85H529V109H494V134H559.06V157H592V39H625V157H658V39H732V107H696.5L734.5 157H765V39H839V157H857"
            stroke="currentColor"
            stroke-width="3"
            stroke-linejoin="round"
          />
        </svg>
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          <a href="/blog" style={{ margin: 0 }}>
            <button
              type="button"
              name="button"
              class="neon-red-glow"
              style={{
                margin: 0,
                padding: "15px 40px",
                height: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: "1",
              }}
            >
              ANÁLISES
            </button>
          </a>
          <a href="#freela" style={{ margin: 0 }}>
            <button
              type="button"
              name="button"
              class="neon-red-glow"
              style={{
                margin: 0,
                padding: "15px 40px",
                background: "transparent",
                color: "var(--principal)",
                border: "2px solid var(--principal)",
                height: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: "1",
              }}
            >
              ORÇAMENTO
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
