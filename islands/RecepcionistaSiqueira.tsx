import { useState, useRef, useEffect } from "preact/hooks";
import { isRecepcionistaOpen } from "../signals/recepcionista.ts";

export default function RecepcionistaSiqueira() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [response, setResponse] = useState("");
  
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    // Initialize SpeechRecognition (prefixos para diferentes navegadores)
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.lang = 'pt-BR'; // Idioma Português do Brasil
      recognitionRef.current.interimResults = false;

      recognitionRef.current.onresult = (event: any) => {
        const text = event.results[0][0].transcript;
        setTranscript(text);
        handleAIResponse(text);
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error("Erro no reconhecimento de voz:", event.error);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
    
    // Garante que as vozes sejam carregadas no Chrome
    if ('speechSynthesis' in window) {
        window.speechSynthesis.onvoiceschanged = () => {
            window.speechSynthesis.getVoices();
        };
    }
  }, []);

  const startListening = () => {
    if (recognitionRef.current) {
      setIsListening(true);
      setTranscript("");
      setResponse("");
      recognitionRef.current.start();
    } else {
      alert("Seu navegador não suporta a Web Speech API. Tente usar o Google Chrome.");
    }
  };

  const handleAIResponse = async (userText: string) => {
    // Aqui futuramente você pode integrar com a API window.ai ou outra inteligência artificial.
    // Por enquanto, faremos um roteiro simples de recepcionista para demonstração.
    
    let reply = "Interessante! O Siqueira ficará feliz em saber disso. Posso ajudar em algo mais?";
    const lowerText = userText.toLowerCase();

    if (lowerText.includes("olá") || lowerText.includes("oi") || lowerText.includes("bom dia") || lowerText.includes("boa tarde")) {
      reply = "Olá! Eu sou o assistente virtual do Siqueira. Como posso ajudar você hoje?";
    } else if (lowerText.includes("contato") || lowerText.includes("falar") || lowerText.includes("telefone")) {
      reply = "Você pode falar com o Siqueira pelo WhatsApp ou enviar um e-mail através do formulário no final da página.";
    } else if (lowerText.includes("sabe fazer") || lowerText.includes("habilidade") || lowerText.includes("trabalha com")) {
      reply = "O Siqueira é desenvolvedor Frontend e atua com Web Design. Ele tem muita experiência na criação de interfaces dinâmicas.";
    } else if (lowerText.includes("portfolio") || lowerText.includes("projetos")) {
      reply = "Dê uma olhada na seção de portfólio logo acima! Lá tem os projetos de sites institucionais, dashboards e aplicativos.";
    }

    setResponse(reply);
    speakResponse(reply);
  };

  const speakResponse = (text: string) => {
    if ('speechSynthesis' in window) {
      // Cancela qualquer fala que esteja acontecendo
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'pt-BR';
      utterance.rate = 1.0;
      utterance.pitch = 1.0;

      // Tenta pegar a melhor voz em Português disponível no navegador
      const voices = window.speechSynthesis.getVoices();
      const ptVoice = voices.find(v => v.lang === 'pt-BR' && v.name.includes('Google')) || voices.find(v => v.lang === 'pt-BR');
      if (ptVoice) {
        utterance.voice = ptVoice;
      }

      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <>
      <div 
        class="sidenav" 
        style={{ 
          right: 0, 
          left: "auto", 
          width: isRecepcionistaOpen.value ? "350px" : "0", 
          backgroundColor: "var(--bg-secondary, #111)",
          borderLeft: isRecepcionistaOpen.value ? "2px solid var(--principal, #ff0000)" : "none",
          borderRight: "none",
          padding: "0",
          overflowX: "hidden",
          transition: "0.5s",
          color: "var(--text-color, #fff)"
        }}
      >
        <a
          href="javascript:void(0)"
          class="closebtn"
          onClick={() => (isRecepcionistaOpen.value = false)}
        >
          &times;
        </a>

        <div style={{ width: "350px", padding: "60px 24px 24px 24px", height: "100%", display: "flex", flexDirection: "column", boxSizing: "border-box" }}>
          <div style={{ borderBottom: "1px solid rgba(255,0,0,0.3)", paddingBottom: "15px", marginBottom: "20px" }}>
            <h3 style={{ color: "var(--principal, #ff0000)", fontSize: "1.5rem", margin: 0, textTransform: "uppercase", letterSpacing: "2px" }}>
              Recepcionista
            </h3>
          </div>
          
          <div class="custom-scrollbar" style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: "15px", paddingRight: "10px" }}>
            {transcript ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                <span style={{ fontSize: "0.8rem", color: "#888", marginBottom: "5px", textTransform: "uppercase", letterSpacing: "1px" }}>Você</span>
                <p style={{ backgroundColor: "rgba(255,255,255,0.1)", padding: "10px 15px", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", margin: 0 }}>
                  {transcript}
                </p>
              </div>
            ) : (
              <p style={{ textAlign: "center", color: "#888", fontStyle: "italic", marginTop: "40px" }}>
                Clique no microfone e me pergunte sobre o Siqueira...
              </p>
            )}
            
            {response && (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginTop: "10px" }}>
                <span style={{ fontSize: "0.8rem", color: "var(--principal, #ff0000)", marginBottom: "5px", textTransform: "uppercase", letterSpacing: "1px" }}>Assistente</span>
                <p style={{ backgroundColor: "rgba(178,27,27,0.2)", padding: "10px 15px", border: "1px solid rgba(255,0,0,0.3)", color: "#fff", margin: 0 }}>
                  {response}
                </p>
              </div>
            )}
          </div>

          <div style={{ marginTop: "auto", paddingTop: "20px", borderTop: "1px solid rgba(255,0,0,0.3)" }}>
            <button
              onClick={isListening ? () => { recognitionRef.current?.stop(); setIsListening(false); } : startListening}
              class={isListening ? "" : "neon-red-glow"}
              style={{
                width: "100%",
                padding: "15px",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "2px",
                cursor: "pointer",
                backgroundColor: isListening ? "var(--principal, #ff0000)" : "transparent",
                color: isListening ? "#fff" : "var(--principal, #ff0000)",
                border: isListening ? "none" : "1px solid var(--principal, #ff0000)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px"
              }}
            >
              {isListening ? "Ouvindo..." : "🎤 Falar"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
