import { useRef, useState } from "preact/hooks";

export interface CarouselItem {
  id: string;
  title: string;
  description?: string;
  image: string;
  link?: string;
}

interface Carousel3DProps {
  items: CarouselItem[];
  small?: boolean;
}

export default function Carousel3D({ items, small = false }: Carousel3DProps) {
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

  // Adjust dimensions based on "small" prop
  const rootWidth = small ? "14rem" : "22rem";
  const rootHeight = small ? "14rem" : "28rem";
  const rootWidthLg = small ? "16rem" : "24rem";
  const rootHeightLg = small ? "16rem" : "28rem";

  return (
    <div
      class="relative w-full flex flex-col items-center justify-center font-sans perspective-container focus:outline-none lg:overflow-visible my-10"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <style>
        {`
        .carousel-root-${small ? "sm" : "lg"} {
            position: relative;
            width: ${rootWidth}; 
            height: ${rootHeight}; 
            perspective: 500px;
            transform-style: preserve-3d;
            margin: 0 auto;
        }
        
        @media (min-width: 1024px) {
             .carousel-root-${small ? "sm" : "lg"} {
                width: ${rootWidthLg}; 
                height: ${rootHeightLg}; 
            }
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
            border-radius: 1rem;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            box-shadow: 0 4px 15px rgba(255, 0, 0, 0.3);
            border: 1px solid rgba(255, 0, 0, 0.2);
            backdrop-filter: blur(10px);
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
            border-radius: 50%;
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

      <div class={`carousel-root-${small ? "sm" : "lg"}`}>
        {active > 0 && (
          <button
            class="nav-btn left"
            onClick={() => updateActive(active - 1)}
          >
            ‹
          </button>
        )}

        {items.map((item, i) => {
          const offset = (active - i) / 3;
          const absOffset = Math.abs(active - i) / 3;
          const direction = Math.sign(active - i); 
          const isActive = i === active;

          const transformStyle = {
            transform: `rotateY(${offset * 50}deg) scaleY(${
              1 + absOffset * -0.4
            }) translateZ(${absOffset * -30}rem) translateX(${
              direction * -5
            }rem)`,
            filter: `blur(${absOffset * 0.5}rem)`,
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
            display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
            zIndex: count - Math.abs(active - i), 
            pointerEvents: isActive ? "auto" : "none",
          };

          const bgLightness = 20 - (Math.abs(active - i) * 5);
          const cardBg = `hsl(0, 50%, ${Math.max(bgLightness, 10)}%)`;

          return (
            <div class="card-container" style={transformStyle} key={item.id}>
              <div class="card-3d" style={{ backgroundColor: cardBg }}>
                {!small && (
                  <div class="p-4 text-white text-center border-b border-white/10 bg-black/40">
                    <h2 class="text-xl font-bold">{item.title}</h2>
                  </div>
                )}
                <div class="flex-grow relative bg-white/5 group p-6 flex flex-col items-center justify-center">
                  <a
                    href={item.link || "#"}
                    class="block w-full h-full relative cursor-pointer flex flex-col items-center justify-center"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 max-h-48"
                    />
                    {item.description && !small && (
                      <p class="text-white mt-4 text-sm text-center opacity-80 group-hover:opacity-100 transition-opacity">
                        {item.description}
                      </p>
                    )}
                    {isActive && (
                      <div class="absolute inset-0 bg-red-500/10 pointer-events-none animate-pulse"></div>
                    )}
                  </a>
                </div>
                {small && (
                  <div class="p-2 text-white text-center border-t border-white/10 bg-black/40">
                    <h3 class="text-md font-semibold">{item.title}</h3>
                  </div>
                )}
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
    </div>
  );
}
