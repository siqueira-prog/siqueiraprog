import { useEffect } from "preact/hooks";
import { audioVolume } from "../signals/audio.ts";

export default function SoundEffects() {
  useEffect(() => {
    // Inicializa o contexto de áudio apenas no lado do cliente
    let audioCtx: AudioContext | null = null;

    const initAudio = () => {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
    };

    const playHoverSound = () => {
      if (!audioCtx) return;
      if (audioVolume.value === 0) return; // Don't play if muted
      
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      // Som Cyberpunk UI: Onda quadrada rápida
      oscillator.type = 'square';
      oscillator.frequency.setValueAtTime(600, audioCtx.currentTime); // pitch inicial
      oscillator.frequency.exponentialRampToValueAtTime(150, audioCtx.currentTime + 0.05); // drop rápido
      
      // Scale sound effects volume with the global audio volume
      const baseGain = 0.05 * audioVolume.value; // Max volume for hover sound is 5% of global volume so it's not too loud
      gainNode.gain.setValueAtTime(baseGain, audioCtx.currentTime); 
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
      
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.05);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Toca o som apenas se passar o mouse em links ou botões
      if (target.closest('a') || target.closest('button')) {
        playHoverSound();
      }
    };

    // A primeira interação do usuário na página libera o áudio do navegador
    document.addEventListener("click", initAudio, { once: true });
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("click", initAudio);
    };
  }, []);

  return null; // Este componente não renderiza nada na tela
}
