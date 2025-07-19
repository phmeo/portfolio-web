import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@chakra-ui/react';

interface InteractiveBackgroundProps {
  children: React.ReactNode;
}

const MOUNTAIN_COLORS = [
  '#2b3146', // far
  '#3c4258', // mid
  '#4e5d6c', // near
  '#6c7983', // ground
];

const FOG_COLORS = [
  'rgba(224,231,239,0.18)',
  'rgba(224,231,239,0.12)',
  'rgba(224,231,239,0.08)',
];

const InteractiveBackground: React.FC<InteractiveBackgroundProps> = ({ children }) => {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMouse({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Parallax for each layer
  const getParallax = (depth: number) => `translate(${(mouse.x - 0.5) * depth}, ${(mouse.y - 0.5) * depth})`;

  // SVG dimensions
  const width = 1920;
  const height = 1080;

  // Sun position
  const sunX = 350 + mouse.x * 200;
  const sunY = 220 + mouse.y * 60;

  return (
    <Box position="relative">
      <Box
        ref={containerRef}
        position="fixed"
        top={0}
        left={0}
        width="100vw"
        height="100vh"
        zIndex={0}
        overflow="hidden"
        bg="transparent"
        pointerEvents="none"
      >
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${width} ${height}`}
          style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0 }}
        >
          {/* Sky gradient */}
          <defs>
            <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#232946" />
              <stop offset="60%" stopColor="#395886" />
              <stop offset="100%" stopColor="#e0e7ef" />
            </linearGradient>
            <radialGradient id="sun" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fffbe6" stopOpacity="1" />
              <stop offset="60%" stopColor="#ffe066" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#ffe066" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect x="0" y="0" width={width} height={height} fill="url(#sky)" />

          {/* Sun (interactive) */}
          <g style={{ transform: getParallax(40), transition: 'transform 0.5s cubic-bezier(.4,2,.6,1)' }}>
            <circle cx={sunX} cy={sunY} r="120" fill="url(#sun)" />
          </g>

          {/* Distant mountains */}
          <g style={{ transform: getParallax(18), transition: 'transform 0.5s cubic-bezier(.4,2,.6,1)' }}>
            <path
              d="M0,700 Q300,600 600,700 T1200,650 T1920,700 V1080 H0 Z"
              fill={MOUNTAIN_COLORS[0]}
            />
          </g>
          {/* Mid mountains */}
          <g style={{ transform: getParallax(30), transition: 'transform 0.5s cubic-bezier(.4,2,.6,1)' }}>
            <path
              d="M0,800 Q400,650 800,800 T1600,750 T1920,800 V1080 H0 Z"
              fill={MOUNTAIN_COLORS[1]}
            />
          </g>
          {/* Near hills */}
          <g style={{ transform: getParallax(45), transition: 'transform 0.5s cubic-bezier(.4,2,.6,1)' }}>
            <path
              d="M0,950 Q500,900 1000,950 T1920,970 V1080 H0 Z"
              fill={MOUNTAIN_COLORS[2]}
            />
          </g>
          {/* Ground */}
          <g style={{ transform: getParallax(60), transition: 'transform 0.5s cubic-bezier(.4,2,.6,1)' }}>
            <path
              d="M0,1040 Q800,1020 1920,1040 V1080 H0 Z"
              fill={MOUNTAIN_COLORS[3]}
            />
          </g>
          {/* Fog layers */}
          <g style={{ transform: getParallax(10), transition: 'transform 0.5s cubic-bezier(.4,2,.6,1)' }}>
            <ellipse cx={width / 2} cy={900} rx={900} ry={60} fill={FOG_COLORS[0]} />
            <ellipse cx={width / 2} cy={1000} rx={1000} ry={80} fill={FOG_COLORS[1]} />
            <ellipse cx={width / 2} cy={1070} rx={1100} ry={60} fill={FOG_COLORS[2]} />
          </g>
        </svg>
        {/* Soft glowing orb following cursor */}
        <Box
          position="absolute"
          left={0}
          top={0}
          width="100vw"
          height="100vh"
          pointerEvents="none"
          zIndex={2}
        >
          <Box
            position="absolute"
            left={`calc(${mouse.x * 100}% - 40px)`}
            top={`calc(${mouse.y * 100}% - 40px)`}
            width="80px"
            height="80px"
            borderRadius="50%"
            background="radial-gradient(circle, #e0e7ef 0%, #a3bffa 60%, #232946 100%)"
            boxShadow="0 0 60px 20px #a3bffa99"
            opacity={0.7}
            style={{ pointerEvents: 'none' }}
            transition="all 0.3s cubic-bezier(.4,2,.6,1)"
          />
        </Box>
      </Box>
      <Box position="relative" zIndex={1}>
        {children}
      </Box>
    </Box>
  );
};

export default InteractiveBackground; 