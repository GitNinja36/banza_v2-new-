import React from 'react';

export const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center ${className}`}>
    <img
      src="https://res.cloudinary.com/davtv5r1c/image/upload/v1773989760/image-removebg-preview-12_dfjlya.png"
      alt="Banza"
      className="h-7 object-contain"
    />
  </div>
);

export const AppIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="24" fill="#111111" />
    <path d="M50 20C50 20 25 50 25 65C25 78.8071 36.1929 90 50 90C63.8071 90 75 78.8071 75 65C75 50 50 20 50 20Z" fill="url(#app_paint0)" />
    <path d="M50 32C50 32 32 56 32 68C32 77.9411 40.0589 86 50 86C59.9411 86 68 77.9411 68 68C68 56 50 32 50 32Z" fill="url(#app_paint1)" />
    <path d="M50 44C50 44 38 62 38 71C38 77.6274 43.3726 83 50 83C56.6274 83 62 77.6274 62 71C62 62 50 44 50 44Z" fill="url(#app_paint2)" />
    <path d="M50 56C50 56 44 68 44 74C44 77.3137 46.6863 80 50 80C53.3137 80 56 77.3137 56 74C56 68 50 56 50 56Z" fill="#F9A826" />
    <defs>
      <linearGradient id="app_paint0" x1="50" y1="20" x2="50" y2="90" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A04100" />
        <stop offset="1" stopColor="#D35400" />
      </linearGradient>
      <linearGradient id="app_paint1" x1="50" y1="32" x2="50" y2="86" gradientUnits="userSpaceOnUse">
        <stop stopColor="#D35400" />
        <stop offset="1" stopColor="#F37021" />
      </linearGradient>
      <linearGradient id="app_paint2" x1="50" y1="44" x2="50" y2="83" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F37021" />
        <stop offset="1" stopColor="#F9A826" />
      </linearGradient>
    </defs>
  </svg>
);
