"use client";

import React, { useEffect, useState } from "react";
import "./shadow.css";

function getTimeLeft(targetDate: Date) {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export default function UnderConstruction() {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 14);

    setTimeLeft(getTimeLeft(targetDate));

    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-white">
      {/* Левая панель с drop-shadow и clip-path */}
      <div
        className="left-wrap w-full md:w-5/12 flex items-center justify-center p-0 z-20 relative"
        style={{ background: "transparent" }}
      >
        <div className="left relative bg-black text-white w-full h-full flex items-center justify-center p-6">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none select-none"
            style={{ backgroundImage: "url('/assets/247.jpg')" }}
          />
          <div className="relative z-10 flex flex-col gap-6">
            {(["days", "hours", "minutes", "seconds"] as const).map((unit) => (
              <div key={unit} className="flex items-center gap-4 text-white">
                <p className="text-8xl font-bold font-mono drop-shadow">
                  {timeLeft ? timeLeft[unit] : "--"}
                </p>
                <p className="uppercase text-2xl tracking-widest text-gray-300">
                  {unit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Правая панель */}
      <div className="w-full md:w-7/12 flex flex-col justify-center items-start p-10 relative z-10">
        <h1 className="text-5xl font-bold mb-6 text-black">COMING SOON</h1>
        <p className="mb-8 text-gray-600 max-w-md">
          Dear friends! I have figured out how to make this page much better and
          will soon be ready to present a new version for your judgment.
        </p>
        <form className="flex w-full max-w-md" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-l focus:outline-none text-base"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={submitted}
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-r hover:bg-gray-800 transition-colors disabled:opacity-60"
            disabled={submitted}
          >
            {submitted ? "Subscribed!" : "Subscribe"}
          </button>
        </form>
      </div>
      <div className="custom-diagonal-shadow hidden"></div>
    </div>
  );
}
