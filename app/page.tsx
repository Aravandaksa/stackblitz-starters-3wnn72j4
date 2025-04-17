'use client'

import '@fontsource/montserrat'
import { useState } from 'react'

export default function Home() {
  const [url, setUrl] = useState('')

  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden">
      {/* Фонове відео */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover brightness-50"
      >
        <source src="https://storage.coverr.co/videos/coverr-online-shopping-session-4017/1080p.mp4" type="video/mp4" />
      </video>

      {/* Навігація */}
      <nav className="z-10 relative flex items-center justify-between px-6 py-4 bg-black/50 border-b border-white/10">
        <div className="text-2xl font-bold">Pickly</div>
      </nav>

      {/* Основний контент */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Скопіюй будь-який сайт
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10">
          Введи посилання — і ми створимо редаговану копію, яку можна змінювати через AI
        </p>

        <div className="flex flex-col sm:flex-row items-center w-full max-w-xl gap-4">
          <input
            type="text"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white transition-all"
          />
          <button className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 transition-transform">
            Скопіювати сайт
          </button>
        </div>

        {/* 3 кроки */}
        <div className="mt-20 grid md:grid-cols-3 gap-10 max-w-5xl w-full text-left">
          <div className="bg-white/5 p-6 rounded-2xl hover:scale-105 transition-transform">
            <h2 className="text-xl font-bold mb-2">1. Встав URL</h2>
            <p className="text-gray-300">Введи посилання на сайт, який хочеш скопіювати</p>
          </div>
          <div className="bg-white/5 p-6 rounded-2xl hover:scale-105 transition-transform">
            <h2 className="text-xl font-bold mb-2">2. AI скопіює</h2>
            <p className="text-gray-300">Ми створимо редаговану копію за секунди</p>
          </div>
          <div className="bg-white/5 p-6 rounded-2xl hover:scale-105 transition-transform">
            <h2 className="text-xl font-bold mb-2">3. Змінюй як хочеш</h2>
            <p className="text-gray-300">Редагуй сайт просто в інтерфейсі — AI усе зрозуміє</p>
          </div>
        </div>
      </main>
    </div>
  )
}
