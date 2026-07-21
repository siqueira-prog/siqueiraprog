import { useEffect, useRef } from "preact/hooks";

const timelineData = [
  {
    phase: "Fase 1",
    title: "Fundação Estética (Design Gráfico & UI)",
    subtitle: "Onde tudo começou: construindo a sensibilidade visual e a experiência do usuário.",
    marco: "Início no design gráfico e web design, dominando a composição visual, tipografia e prototipagem (Figma).",
    entrega: "Compreensão profunda de que qualquer sistema ou dado, por mais complexo que seja por trás, precisa ser intuitivo e visualmente impactante para o usuário final. É a base que hoje garante que meus projetos de freela tenham design exclusivo e alta conversão.",
  },
  {
    phase: "Fase 2",
    title: "Transição para a Web (Desenvolvimento Front-end)",
    subtitle: "Dando vida aos pixels: transformando layouts estáticos em código vivo.",
    marco: "Migração natural do design para o código, dominando a tríade da web (HTML, CSS, JavaScript).",
    entrega: "Criação de interfaces responsivas, otimização de performance e os primeiros passos na arquitetura de aplicações web estruturadas, preparando o terreno para sistemas mais robustos.",
  },
  {
    phase: "Fase 3",
    title: "Arquitetura e Processamento de Dados (Back-end & Setor Público)",
    subtitle: "Entrando nos bastidores: lidando com o fluxo de informações estruturadas em larga escala.",
    marco: "Atuação técnica no setor público (Ministério), focando no desenvolvimento back-end e, crucialmente, na coleta e tratamento de dados de saneamento básico.",
    entrega: "Experiência real manipulando bases de dados complexas e volumosas de utilidade pública. Aqui consolidei meu domínio em lógica de programação severa, modelagem de bancos de dados (SQL) e pipelines de integração de dados brutos.",
  },
  {
    phase: "Fase 4",
    title: "O Mundo Físico e Tempo Real (Automação, CLP & Deno)",
    subtitle: "Onde o código encontra as máquinas: monitoramento de alta performance.",
    marco: "Expansão para sistemas embarcados e automação industrial. Programação de CLPs (Controladores Lógicos Programáveis) via protocolo Modbus e o desenvolvimento de sistemas Web SCADA/BMS de monitoramento usando Deno Fresh.",
    entrega: "Criação de aplicações de altíssima velocidade capazes de ler dados de sensores físicos em tempo real, processá-los na borda e renderizá-los instantaneamente na tela.",
  },
  {
    phase: "Fase Atual",
    title: "Inteligência de Mercado (Análise de Dados)",
    subtitle: "O objetivo atual: transformar dados brutos (industriais, públicos ou econômicos) em decisões estratégicas.",
    marco: "Unir a bagagem de coleta do back-end, o tempo real da automação e a clareza do design para focar em Análise de Dados estruturada e Inteligência de Negócios.",
    entrega: "Produção de análises densas orientadas a dados sobre setores estratégicos nacionais (como o mercado de açúcar e etanol), traduzindo variáveis econômicas complexas em relatórios visuais e acionáveis.",
    isSprint: true,
  },
];

export default function TimelineParallax() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.3 }
    );

    const items = containerRef.current?.querySelectorAll(".timeline-item");
    items?.forEach((item) => observer.observe(item));

    return () => {
      items?.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <div style={{ position: "relative", overflow: "hidden", width: "100%" }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          opacity: 0.8
        }}
      >
        <source src="/video/mp4.mp4" type="video/mp4" />
      </video>
      <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.6)", zIndex: 0 }}></div>

      <section id="quemsou" class="timeline-section" ref={containerRef} style={{ position: "relative", zIndex: 1 }}>
        <div class="timeline-header">
        <h2 style={{ textAlign: "left", marginBottom: "10px" }}>LINHA DO TEMPO</h2>
        <h3 style={{ textAlign: "left", color: "var(--principal)", marginBottom: "60px", letterSpacing: "1px" }}>
          ESTUDANTE DE ENGENHARIA | DESENVOLVIMENTO DE SISTEMAS & DADOS
        </h3>
      </div>

      <div class="timeline-container">
        <div class="timeline-line"></div>

        {timelineData.map((item, index) => (
          <div class={`timeline-item ${index % 2 === 0 ? "left" : "right"} ${item.isSprint ? "sprint" : ""}`} key={index}>
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <span class="timeline-phase">{item.phase}</span>
              <h4 class="timeline-title">{item.title}</h4>
              <p class="timeline-subtitle">{item.subtitle}</p>
              
              <div class="timeline-details">
                <p><strong>{item.isSprint ? "O Foco:" : "O Marco:"}</strong> {item.marco}</p>
                <p><strong>{item.isSprint ? "A Aplicação:" : "A Entrega:"}</strong> {item.entrega}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}
