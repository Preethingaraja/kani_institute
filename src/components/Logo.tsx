interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  light?: boolean;
}

export default function Logo({ className = '', size = 36, showText = true, light = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#61039f" />
            <stop offset="100%" stopColor="#9C27B0" />
          </linearGradient>
          <linearGradient id="logo-grad-light" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F5F3FF" />
          </linearGradient>
        </defs>
        
        {/* Logo Emblem background */}
        <rect
          width="40"
          height="40"
          rx="12"
          fill={light ? "url(#logo-grad-light)" : "url(#logo-grad)"}
          className="shadow-sm"
        />
        
        {/* Spine of the Book (representing academics) */}
        <path
          d="M13 10V30"
          stroke={light ? "#61039f" : "#FFFFFF"}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Upper Swoosh (representing growth & leaf) */}
        <path
          d="M13 20C17 20 22 16 25 12"
          stroke={light ? "#61039f" : "#FFFFFF"}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Lower Swoosh (representing path & pages) */}
        <path
          d="M13 20C17 20 22 24 25 28"
          stroke={light ? "#61039f" : "#FFFFFF"}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Golden Shining Star at the center of the 'K' (representing achievement, potential, & precious gem) */}
        <path
          d="M26.5 16L27.7 18.3L30 19.5L27.7 20.7L26.5 23L25.3 20.7L23 19.5L25.3 18.3Z"
          fill="#FFC107"
        />
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-display font-black tracking-wider leading-none text-xl ${
              light ? 'text-white' : 'text-text-dark'
            }`}
          >
            KANI
          </span>
          <span
            className={`text-[9px] font-bold tracking-[0.25em] leading-none uppercase mt-1 ${
              light ? 'text-gray-300' : 'text-primary'
            }`}
          >
            INSTITUTE
          </span>
        </div>
      )}
    </div>
  );
}
