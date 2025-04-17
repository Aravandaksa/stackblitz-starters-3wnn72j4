"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [html, setHtml] = useState("");

  const handleCopy = async () => {
    if (!url) return;
    setLoading(true);

    try {
      const res = await fetch(`/api/copy?url=${encodeURIComponent(url)}`);
      const data = await res.text();
      setHtml(data);
    } catch (err) {
      console.error("Помилка копіювання:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-6">Скопіювати сайт</h1>

      <div className="w-full max-w-md space-y-4">
        <Input
          placeholder="Введіть URL (наприклад, https://example.com)"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="bg-zinc-900 text-white border-zinc-700"
        />
        <Button onClick={handleCopy} disabled={loading} className="w-full">
          {loading ? "Завантаження..." : "Скопіювати сайт"}
        </Button>
      </div>

      {html && (
        <div className="mt-10 w-full max-w-4xl bg-zinc-900 p-4 rounded text-sm overflow-auto max-h-[400px]">
          <pre>{html}</pre>
        </div>
      )}
    </main>
  );
}
