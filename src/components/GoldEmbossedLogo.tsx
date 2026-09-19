import React from 'react';

interface GoldEmbossedLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
  variant?: 'full' | 'compact' | 'monogram';
}

export const GoldEmbossedLogo: React.FC<GoldEmbossedLogoProps> = ({
  size = 'md',
  showSubtitle = true,
  className = '',
  variant = 'full',
}) => {
  const fontSizes = {
    sm: 'text-lg tracking-[0.22em]',
    md: 'text-2xl tracking-[0.25em]',
    lg: 'text-4xl tracking-[0.28em]',
    xl: 'text-5xl md:text-6xl tracking-[0.3em]',
  };

  const subtitleSizes = {
    sm: 'text-[9px] tracking-[0.3em]',
    md: 'text-[10px] tracking-[0.35em]',
    lg: 'text-xs tracking-[0.4em]',
    xl: 'text-sm tracking-[0.45em]',
  };

  const crestSizes = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-10 h-10',
    xl: 'w-14 h-14',
  };

  return (
    <div className={`inline-flex flex-col items-center select-none group cursor-pointer ${className}`}>
      <div className="flex items-center gap-2">
        {/* Embossed Gold Crest Emblem */}
        <div className={`relative ${crestSizes[size]} flex items-center justify-center`}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            <defs>
              <linearGradient id="goldGradientCrest" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF8DB" />
                <stop offset="25%" stopColor="#F5CE68" />
                <stop offset="50%" stopColor="#D4AF37" />
                <stop offset="75%" stopColor="#996515" />
                <stop offset="100%" stopColor="#F9E29C" />
              </linearGradient>
              <filter id="goldEmbossFilter" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur" />
                <feSpecularLighting in="blur" surfaceScale="2" specularConstant="1.2" specularExponent="20" result="specOut">
                  <fePointLight x="-50" y="-100" z="200" />
                </feSpecularLighting>
                <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" />
                <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
              </filter>
            </defs>
            {/* Outer Diamond-Shield */}
            <polygon
              points="50,5 92,30 92,70 50,95 8,70 8,30"
              fill="none"
              stroke="url(#goldGradientCrest)"
              strokeWidth="3.5"
              strokeLinejoin="round"
            />
            {/* Inner Precision Diamond */}
            <polygon
              points="50,16 82,36 82,64 50,84 18,64 18,36"
              fill="rgba(11, 12, 16, 0.6)"
              stroke="url(#goldGradientCrest)"
              strokeWidth="1.5"
            />
            {/* Stylized 'A' Crest Monogram with Emboss styling */}
            <path
              d="M50,25 L65,72 L57,72 L53,58 L47,58 L43,72 L35,72 Z M48,46 L52,46 L50,38 Z"
              fill="url(#goldGradientCrest)"
              style={{ filter: 'url(#goldEmbossFilter)' }}
            />
          </svg>
        </div>

        {/* Embossed Gold Typography */}
        <span
          className={`font-display font-extrabold uppercase transition-all duration-300 ${fontSizes[size]} relative`}
          style={{
            background: 'linear-gradient(135deg, #FFF6D5 0%, #F3CE65 20%, #D4AF37 45%, #936312 70%, #F5D77F 90%, #FFF3CC 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.9)) drop-shadow(0 -1px 0.5px rgba(255,245,210,0.6))',
          }}
        >
          AKHAI
        </span>
      </div>

      {showSubtitle && variant !== 'monogram' && (
        <span
          className={`font-sans uppercase font-medium mt-0.5 text-zinc-400 group-hover:text-[#d4af37] transition-colors duration-300 ${subtitleSizes[size]}`}
        >
          Smokers Oral Care
        </span>
      )}
    </div>
  );
};
