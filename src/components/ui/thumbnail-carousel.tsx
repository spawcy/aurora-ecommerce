"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { ProductPlaceholderItem } from "@/const/interfaces/product-placeholder-item-interface";

const FULL_WIDTH_PX = 120;
const COLLAPSED_WIDTH_PX = 35;
const GAP_PX = 2;
const MARGIN_PX = 2;

function ThumbnailRail({ index, setIndex, images }: { index: number; setIndex: React.Dispatch<React.SetStateAction<number>>; images: string[] }) {
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (thumbnailsRef.current) {
      let scrollPosition = 0;
      for (let i = 0; i < index; i++) {
        scrollPosition += COLLAPSED_WIDTH_PX + GAP_PX;
      }
      scrollPosition += MARGIN_PX;
      const containerWidth = thumbnailsRef.current.offsetWidth;
      const centerOffset = containerWidth / 2 - FULL_WIDTH_PX / 2;
      scrollPosition -= centerOffset;

      thumbnailsRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [index]);

  return (
    <div ref={thumbnailsRef} className="overflow-x-auto" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
      <style>{`
        .overflow-x-auto::-webkit-scrollbar { display: none; }
      `}</style>
      <div className="flex gap-0.5 h-20 pb-2" style={{ width: "fit-content" }}>
        {images.map((url, i) => (
          <motion.button
            key={i}
            onClick={() => setIndex(i)}
            initial={false}
            animate={i === index ? "active" : "inactive"}
            variants={{
              active: { width: FULL_WIDTH_PX, marginLeft: MARGIN_PX, marginRight: MARGIN_PX },
              inactive: { width: COLLAPSED_WIDTH_PX, marginLeft: 0, marginRight: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative shrink-0 h-full overflow-hidden rounded"
          >
            <img src={url} alt={`Thumbnail ${i}`} className="w-full h-full object-cover pointer-events-none select-none border border-border" draggable={false} />
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default function ImageGallery({ product }: { product: ProductPlaceholderItem }) {
  const [index, setIndex] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const images = product.product_image;

  useEffect(() => {
    if (!isDragging && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const targetX = -index * containerWidth;
      animate(x, targetX, { type: "spring", stiffness: 300, damping: 30 });
    }
  }, [index, x, isDragging]);

  return (
    <div className="w-full mx-auto p-4 lg:p-10">
      <div className="flex flex-col gap-3">
        <div className="relative overflow-hidden rounded-lg bg-gray-100" ref={containerRef}>
          <motion.div
            className="flex"
            drag="x"
            dragConstraints={containerRef}
            dragElastic={0.2}
            dragMomentum={false}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(e, info) => {
              setIsDragging(false);
              const containerWidth = containerRef.current?.offsetWidth || 1;
              const offset = info.offset.x;
              const velocity = info.velocity.x;

              let newIndex = index;
              if (Math.abs(velocity) > 500) {
                newIndex = velocity > 0 ? index - 1 : index + 1;
              } else if (Math.abs(offset) > containerWidth * 0.3) {
                newIndex = offset > 0 ? index - 1 : index + 1;
              }

              newIndex = Math.max(0, Math.min(images.length - 1, newIndex));
              setIndex(newIndex);
            }}
            style={{ x }}
          >
            {images.map((url, i) => (
              <div key={i} className="shrink-0 w-full h-[400px] p-4">
                <img src={url} alt={product.product_title} className="w-full h-full object-cover rounded-lg select-none pointer-events-none" draggable={false} />
              </div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <motion.button
            disabled={index === 0}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            className={`absolute left-4 text-black top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-10
              ${index === 0 ? "opacity-0 pointer-events-none" : "bg-white/80 hover:bg-white opacity-100"}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <motion.button
            disabled={index === images.length - 1}
            onClick={() => setIndex((i) => Math.min(images.length - 1, i + 1))}
            className={`absolute text-black right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-10
              ${index === images.length - 1 ? "opacity-0 pointer-events-none" : "bg-white/80 hover:bg-white opacity-100"}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {index + 1} / {images.length}
          </div>
        </div>

        <ThumbnailRail index={index} setIndex={setIndex} images={images} />
      </div>
    </div>
  );
}
