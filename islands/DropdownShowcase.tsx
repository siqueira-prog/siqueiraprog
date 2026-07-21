import { useState } from "preact/hooks";
import Carousel3D, { CarouselItem } from "./Carousel3D.tsx";

export interface ShowcaseDataset {
  id: string;
  title: string;
  items: CarouselItem[];
  text: string;
}

interface DropdownShowcaseProps {
  datasets: ShowcaseDataset[];
}

export default function DropdownShowcase({ datasets }: DropdownShowcaseProps) {
  if (!datasets || datasets.length === 0) return null;

  const [activeId, setActiveId] = useState(datasets[0].id);
  const [isOpen, setIsOpen] = useState(false);

  const activeDataset = datasets.find((d) => d.id === activeId) || datasets[0];

  return (
    <div class="showcase-container" style={{
      backgroundColor: "var(--text-muted, #808080)",
      borderRadius: "0",
      overflow: "hidden",
      margin: "0 auto",
      maxWidth: "800px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
    }}>
      {/* Dropdown Header */}
      <div class="showcase-header" style={{ position: "relative" }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            width: "100%",
            backgroundColor: "var(--principal, #B21B1B)",
            color: "#ffffff",
            padding: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "1.2rem",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
            textAlign: "left"
          }}
        >
          {activeDataset.title}
          <svg 
            style={{ 
              width: "24px", 
              height: "24px", 
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease" 
            }} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown Options */}
        {isOpen && (
          <div style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            backgroundColor: "var(--bg-secondary, #333)",
            zIndex: 100,
            boxShadow: "0 5px 15px rgba(0,0,0,0.5)",
            borderRadius: "0"
          }}>
            {datasets.map((ds) => (
              <button
                key={ds.id}
                onClick={() => {
                  setActiveId(ds.id);
                  setIsOpen(false);
                }}
                style={{
                  display: "block",
                  width: "100%",
                  padding: "15px 20px",
                  textAlign: "left",
                  background: "transparent",
                  border: "none",
                  color: "var(--text-color, #fff)",
                  cursor: "pointer",
                  fontSize: "1.1rem",
                  borderBottom: "1px solid rgba(255,255,255,0.1)"
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                {ds.title}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Content Area */}
      <div class="showcase-content" style={{ padding: "40px 20px" }}>
        <Carousel3D items={activeDataset.items} small={true} whiteBg={true} />
        
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "1.1rem",
          lineHeight: "1.6",
          color: "var(--text-color, #fff)",
          marginTop: "20px",
          textAlign: "left"
        }}>
          {activeDataset.text}
        </p>
      </div>
    </div>
  );
}
