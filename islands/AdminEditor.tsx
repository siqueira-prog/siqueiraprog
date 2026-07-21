import { useEffect, useRef } from "preact/hooks";

export default function AdminEditor() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // Check if EasyMDE is loaded via CDN
    if (textareaRef.current && (window as any).EasyMDE) {
      new (window as any).EasyMDE({
        element: textareaRef.current,
        spellChecker: false,
        placeholder: "Escreva o conteúdo do post em Markdown...",
      });
    }
  }, []);

  return <textarea ref={textareaRef} name="content" required></textarea>;
}
