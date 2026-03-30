"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import Image from "next/image";

const LightboxContext = createContext<{
  open: (src: string, alt: string) => void;
}>({ open: () => {} });

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [image, setImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <LightboxContext.Provider
      value={{ open: (src, alt) => setImage({ src, alt }) }}
    >
      {children}
      {image && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-pointer"
          onClick={() => setImage(null)}
        >
          <div className="relative max-h-[90vh] max-w-[90vw]">
            <Image
              src={image.src}
              alt={image.alt}
              width={1200}
              height={800}
              className="rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  return useContext(LightboxContext);
}
