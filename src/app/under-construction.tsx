import React, { useEffect, useState } from 'react';

const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 14); // 14 days from now

function getTimeLeft() {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export default function UnderConstruction() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4">
      <div className="w-full max-w-2xl bg-gray-800 bg-opacity-90 rounded-xl shadow-lg p-8 flex flex-col md:flex-row gap-8">
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="flex space-x-6 text-center">
            <div>
              <p className="text-4xl font-bold">{timeLeft.days}</p>
              <p className="text-xs uppercase tracking-widest text-gray-400">Days</p>
            </div>
            <div>
              <p className="text-4xl font-bold">{timeLeft.hours}</p>
              <p className="text-xs uppercase tracking-widest text-gray-400">Hours</p>
            </div>
            <div>
              <p className="text-4xl font-bold">{timeLeft.minutes}</p>
              <p className="text-xs uppercase tracking-widest text-gray-400">Minutes</p>
            </div>
            <div>
              <p className="text-4xl font-bold">{timeLeft.seconds}</p>
              <p className="text-xs uppercase tracking-widest text-gray-400">Seconds</p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 tracking-tight">COMING SOON</h1>
          <p className="mb-4 text-gray-300">Мы работаем над этой страницей. Скоро здесь появится что-то классное!</p>
          <form className="flex mb-4" onSubmit={handleSubmit}>
            <input
              type="email"
              className="flex-1 p-2 rounded-l-md bg-gray-700 border-none text-white placeholder-gray-400 focus:outline-none"
              placeholder="Your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              disabled={submitted}
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md font-semibold transition-colors disabled:opacity-50"
              disabled={submitted}
            >
              {submitted ? 'Subscribed!' : 'Subscribe'}
            </button>
          </form>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-blue-400" aria-label="Twitter"><i className="fab fa-twitter fa-lg"></i></a>
            <a href="#" className="hover:text-blue-400" aria-label="LinkedIn"><i className="fab fa-linkedin fa-lg"></i></a>
            <a href="#" className="hover:text-blue-400" aria-label="Facebook"><i className="fab fa-facebook fa-lg"></i></a>
            <a href="#" className="hover:text-pink-400" aria-label="Instagram"><i className="fab fa-instagram fa-lg"></i></a>
            <a href="#" className="hover:text-red-400" aria-label="YouTube"><i className="fab fa-youtube fa-lg"></i></a>
            <a href="#" className="hover:text-gray-400" aria-label="GitHub"><i className="fab fa-github fa-lg"></i></a>
            <a href="#" className="hover:text-orange-400" aria-label="Stack Overflow"><i className="fab fa-stack-overflow fa-lg"></i></a>
            <a href="#" className="hover:text-green-400" aria-label="Medium"><i className="fab fa-medium fa-lg"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}
