import { useEffect, useRef } from "preact/hooks";
import { audioVolume } from "../signals/audio.ts";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = audioVolume.value; // Initial volume

    // Sync volume state
    const unsubscribe = audioVolume.subscribe((vol) => {
      audio.volume = vol;
      if (vol === 0) {
        audio.pause();
      } else if (audio.paused) {
        audio.play().catch(() => {});
      }
    });

    // Pause audio when screen turns off or tab goes to background
    const handleVisibilityChange = () => {
      if (document.hidden) {
        audio.pause();
      } else if (audioVolume.value > 0) {
        audio.play().catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Browser autoplay policy workaround
    // The browser blocks autoplay unless the user interacts with the page first.
    const startAudio = () => {
      if (audio.paused && audioVolume.value > 0) {
        audio.play().catch(() => {
          // Ignore DOMException errors related to autoplay policy if they still happen
        });
      }
      // Remove listeners after first interaction
      document.removeEventListener("click", startAudio);
      document.removeEventListener("keydown", startAudio);
      document.removeEventListener("touchstart", startAudio);
    };

    // Attempt autoplay immediately
    if (audioVolume.value > 0) {
      audio.play().catch(() => {
        // If it fails, wait for user interaction to start it
        document.addEventListener("click", startAudio);
        document.addEventListener("keydown", startAudio);
        document.addEventListener("touchstart", startAudio);
      });
    }

    return () => {
      unsubscribe();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("click", startAudio);
      document.removeEventListener("keydown", startAudio);
      document.removeEventListener("touchstart", startAudio);
    };
  }, []);

  return (
    <audio 
      ref={audioRef} 
      src="/audio/bg-music.mp3" 
      loop 
      preload="auto" 
      style={{ display: 'none' }} 
    />
  );
}
