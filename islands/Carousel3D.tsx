import { useRef, useState } from "preact/hooks";

export interface CarouselItem {
  id: string;
  title: string;
  description?: string;
  image: string;
  link?: string;
}

export interface Carousel3DProps {
  items: CarouselItem[];
  whiteBg?: boolean;
  sideBySide?: boolean;
  small?: boolean;
}

export default function Carousel3D({ items, whiteBg = true, sideBySide = false }: Carousel3DProps) {
  const [active, setActive] = useState(1 > items.length - 1 ? 0 : 1);

  const updateActive = (newIndex: number) => {
    if (newIndex >= 0 && newIndex < items.length) {
      setActive(newIndex);
    }
  };

  const MAX_VISIBILITY = 3;
  const count = items.length;

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e: TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && active < count - 1) {
      updateActive(active + 1);
    }
    if (isRightSwipe && active > 0) {
      updateActive(active - 1);
    }
  };

  // Responsive dimensions for the circular cards
  const rootWidth = "min(18rem, 65vw)";
  const rootHeight = "min(18rem, 65vw)";
  const rootWidthLg = "20rem";
  const rootHeightLg = "20rem";

  return (
    <div
      class="relative w-full flex flex-col items-center justify-center font-sans perspective-container focus:outline-none lg:overflow-visible my-10"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <style>
        {`
        .carousel-root {
            position: relative;
            width: ${rootWidth}; 
            height: ${rootHeight}; 
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        @media (min-width: 1024px) {
             .carousel-root {
                width: ${rootWidthLg}; 
                height: ${rootHeightLg}; 
            }
            .carousel-img-container {
                margin: 80px auto !important;
                width: 160px !important;
                height: 160px !important;
            }
        }

        .carousel-img-container {
            margin: 20% auto;
            width: 60%;
            height: 60%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .card-container {
            position: absolute;
            width: 100%;
            height: 100%;
            transition: all 0.5s ease-out;
        }

        .card-3d {
            width: 100%;
            height: 100%;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            border-radius: 50%;
            box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.2);
            border-top: 1px solid rgba(255, 255, 255, 0.8);
            border-left: 1px solid rgba(255, 255, 255, 0.8);
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
            border-right: 1px solid rgba(0, 0, 0, 0.05);
            transition: all 0.5s ease-out;
        }

        .card-3d.active-neon {
            border: 2px solid var(--principal);
            box-shadow: 0 0 20px var(--principal), inset 0 0 10px var(--principal);
        }
        
        .nav-btn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 50;
            background: rgba(255, 0, 0, 0.15);
            color: #ff3333;
            border: 2px solid rgba(255, 0, 0, 0.5);
            font-size: 2.5rem;
            width: 3rem;
            height: 3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            backdrop-filter: blur(8px);
            box-shadow: 0 0 15px rgba(255, 0, 0, 0.2);
            padding-bottom: 0.5rem;
        }
        .nav-btn:hover {
            background: rgba(255, 0, 0, 0.4);
            box-shadow: 0 0 25px rgba(255, 0, 0, 0.6);
            color: white;
            border-color: white;
        }
        .nav-btn.left { left: -1.5rem; }
        .nav-btn.right { right: -1.5rem; }
      `}
      </style>

      <div style={{ display: "flex", flexDirection: sideBySide ? "row" : "column", alignItems: "center", justifyContent: "center", gap: sideBySide ? "40px" : "0", flexWrap: "wrap", width: "100%" }}>
        <div class="carousel-root">
          {active > 0 && (
          <button
            class="nav-btn left"
            onClick={() => updateActive(active - 1)}
          >
            ‹
          </button>
        )}
        {items.map((item, i) => {
          const offset = active - i;
          const absOffset = Math.abs(offset);
          const isActive = i === active;

          // Flat 3-card layout scaling
          let translateX = "0";
          let scale = "1";
          let zIndex = 10;
          let opacity = "1";

          if (offset === 1) { // Left card
            translateX = "-75%";
            scale = "0.7";
            zIndex = 5;
          } else if (offset === -1) { // Right card
            translateX = "75%";
            scale = "0.7";
            zIndex = 5;
          } else if (absOffset > 1) { // Hidden cards
            translateX = offset > 1 ? "-100%" : "100%";
            scale = "0.5";
            opacity = "0";
            zIndex = 0;
          }

          const transformStyle = {
            transform: `translateX(${translateX}) scale(${scale})`,
            opacity: opacity,
            zIndex: zIndex,
            pointerEvents: isActive ? "auto" : "none",
          };

          const cardBg = whiteBg ? "#ffffff" : "var(--bg-secondary)";

          return (
            <div class="card-container" style={transformStyle} key={item.id}>
              <div
                class={`card-3d ${isActive ? "active-neon" : ""}`}
                style={{
                  backgroundColor: cardBg,
                }}
              >
                <a
                  href={item.link || "#"}
                  class="w-full h-full relative cursor-pointer block group"
                >
                  <div class="carousel-img-container">
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: "100%", height: "100%", objectFit: "contain" }}
                      class="transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  {isActive && (
                    <div class="absolute inset-0 bg-red-500/5 pointer-events-none animate-pulse rounded-full">
                    </div>
                  )}
                </a>
              </div>
            </div>
          );
        })}

        {active < count - 1 && (
          <button
            class="nav-btn right"
            onClick={() => updateActive(active + 1)}
          >
            ›
          </button>
        )}
        </div>

        <div style={{ 
          marginTop: sideBySide ? "0" : "40px", 
          textAlign: "left", 
          maxWidth: sideBySide ? "500px" : "800px", 
          marginLeft: sideBySide ? "0" : "auto", 
          marginRight: sideBySide ? "0" : "auto", 
          padding: "0 20px", 
          minHeight: "120px",
          flex: sideBySide ? "1 1 300px" : "auto"
        }}>
          <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "15px", color: "var(--principal)", textTransform: "uppercase" }}>
            {items[active].title}
          </h3>
          {items[active].description && (
            <p 
              style={{ color: "var(--text-color)", opacity: 0.9, lineHeight: "1.6", fontSize: "1rem", textAlign: "left" }}
              dangerouslySetInnerHTML={{ __html: items[active].description }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
