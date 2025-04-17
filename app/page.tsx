// app/page.tsx

"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [url, setUrl] = useState("");

  const handleCopy = () => {
    if (!url) return;
    alert(`Скопіювати сайт за URL: ${url}`);
    // Тут буде логіка копіювання
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* Відео на фоні */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* Контент */}
      <div className="z-10 relative px-4 w-full max-w-2xl text-center">
        <h1 className="text-5xl font-bold mb-6">Pickly</h1>
        <p className="mb-8 text-lg text-gray-300">
          Скопіюй будь-який сайт за URL і редагуй його через AI
        </p>

        <div className="flex gap-2 w-full">
          <Input
            type="text"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 bg-white text-black"
          />
          <Button onClick={handleCopy}>Скопіювати</Button>
        </div>

        <div className="mt-8">
          <iframe
            data-tally-src="https://tally.so/embed/w4gV6J?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="147"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Tally Form"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
