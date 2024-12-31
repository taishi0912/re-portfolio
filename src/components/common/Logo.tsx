import { useState } from 'react';

interface LogoProps {
  imageUrl?: string;
}

export default function Logo({ imageUrl }: LogoProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="w-12 h-12 rounded-full border-2 border-[#C5A572] flex items-center justify-center overflow-hidden">
      {!imageError ? (
        <img
          src="/assets/media/logo.jpg"
          alt="Logo"
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
      ) : (
        <span className="font-serif text-sm text-[#C5A572]">M</span>
      )}
    </div>
  );
}