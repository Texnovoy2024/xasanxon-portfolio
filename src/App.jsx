
// Hasanxon uchun React + Spline asosida 3D shaxsiy sahifa (Dark Mode qo‘shilgan)

import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 dark:from-gray-900 dark:to-black text-gray-900 dark:text-white">
      <button
        onClick={() => setIsDark(!isDark)}
        className="absolute top-4 right-4 px-4 py-2 bg-indigo-600 text-white rounded shadow hover:bg-indigo-700 transition z-50"
      >
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </button>

      {/* Hero Section */}
      <section className="w-full h-screen flex flex-col md:flex-row items-center justify-center gap-6 p-8">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Salom, men <span className="text-indigo-600 dark:text-indigo-400">Hasanxon</span></h1>
          <p className="text-xl mb-6">Men Frontend Developer sifatida React va Spline bilan ishlayman.</p>
          <a href="#contact" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition">Bog‘lanish</a>
        </div>
        <div className="md:w-1/2 w-full h-[400px] md:h-[500px]">
          <Spline scene="https://prod.spline.design/6YtbwMUnOBXK8zAE/scene.splinecode" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Men haqimda</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Men React, Vue va React Native texnologiyalari bilan ishlovchi frontend developer sifatida 3D interfeyslar, animatsiyalar va zamonaviy UI yaratishda tajribaga egaman.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 text-center bg-white dark:bg-gray-800">
        <h2 className="text-3xl font-semibold mb-4">Bog‘lanish</h2>
        <p className="mb-4">Email: hasanxon@example.com</p>
        <p>Telegram: @hasanxon_dev</p>
      </section>

      <footer className="text-center py-4 text-sm text-gray-500 dark:text-gray-400">
        &copy; 2025 Hasanxon. Barcha huquqlar himoyalangan.
      </footer>
    </div>
  );
}
