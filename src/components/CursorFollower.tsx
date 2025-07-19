import React, { useEffect, useRef, useState } from 'react';

const ORB_SIZE = 80;
const ORB_COLOR = 'radial-gradient(circle at 60% 40%, #fffbe6 0%, #ffe066 40%, #e1b866 70%, #2b3146 100%)';
const ORB_SHADOW = '0 0 64px 24px #ffe06655, 0 0 0 0 #fffbe6, 0 0 120px 40px #e1b86622';
const SPARKLE_COLORS = ['#ffe066', '#e1b866', '#f7c873', '#fffbe6'];
const RUNE_GLYPHS = ['ᚠ', 'ᚱ', 'ᛉ', 'ᛞ', 'ᛟ', 'ᛝ', 'ᛃ', 'ᚨ', 'ᚾ', 'ᛋ', 'ᛏ', 'ᛗ']; // Unicode runes
const RUNE_COUNT = 7;

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

type Rune = {
  id: number;
  angle: number;
  distance: number;
  glyph: string;
  opacity: number;
  phase: number;
  burst: number; // 0 = no burst, 1 = full burst
};

const CursorFollower: React.FC = () => {
  const orbRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [orb, setOrb] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [sparkles, setSparkles] = useState<{id: number, x: number, y: number, opacity: number, color: string, size: number}[]>([]);
  const [runes, setRunes] = useState<Rune[]>([]);
  const sparkleId = useRef(0);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Orb trailing animation (slower, organic)
  useEffect(() => {
    let running = true;
    function animate() {
      setOrb(prev => {
        const dx = mouse.x - prev.x;
        const dy = mouse.y - prev.y;
        // Organic movement: add a little wobble
        const t = Date.now() / 800;
        return {
          x: prev.x + dx * 0.09 + Math.sin(t) * 0.7,
          y: prev.y + dy * 0.09 + Math.cos(t) * 0.7,
        };
      });
      if (running) requestAnimationFrame(animate);
    }
    animate();
    return () => { running = false; };
  }, [mouse]);

  // Sparkle effect
  useEffect(() => {
    const interval = setInterval(() => {
      setSparkles(sparkles => [
        ...sparkles,
        ...Array.from({ length: Math.floor(randomBetween(1, 2)) }).map(() => {
          sparkleId.current += 1;
          const angle = randomBetween(0, 2 * Math.PI);
          const radius = randomBetween(16, 48);
          return {
            id: sparkleId.current,
            x: orb.x + Math.cos(angle) * radius,
            y: orb.y + Math.sin(angle) * radius,
            opacity: 1,
            color: SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)],
            size: randomBetween(6, 14),
          };
        })
      ]);
    }, 40);
    return () => clearInterval(interval);
  }, [orb]);

  // Fade and remove sparkles
  useEffect(() => {
    const interval = setInterval(() => {
      setSparkles(sparkles => sparkles
        .map(s => ({ ...s, opacity: s.opacity - 0.03 }))
        .filter(s => s.opacity > 0.05)
      );
    }, 16);
    return () => clearInterval(interval);
  }, []);

  // Rune glyphs floating around the orb
  useEffect(() => {
    setRunes(
      Array.from({ length: RUNE_COUNT }).map((_, i) => ({
        id: i,
        angle: randomBetween(0, 2 * Math.PI),
        distance: randomBetween(40, 70),
        glyph: RUNE_GLYPHS[Math.floor(Math.random() * RUNE_GLYPHS.length)],
        opacity: randomBetween(0.7, 1),
        phase: randomBetween(0, 2 * Math.PI),
        burst: 0,
      }))
    );
  }, []);

  // Animate runes
  useEffect(() => {
    let running = true;
    function animateRunes() {
      setRunes(runes =>
        runes.map(rune => {
          // Animate angle and distance for floating effect
          const t = Date.now() / 900 + rune.phase;
          let burst = rune.burst > 0 ? rune.burst - 0.25 : 0; // much faster return
          return {
            ...rune,
            angle: rune.angle + 0.006,
            distance: rune.distance + Math.sin(t + rune.id) * 3 + (burst > 0 ? 38 * burst : 0),
            opacity: 0.7 + 0.3 * Math.sin(t + rune.id),
            burst,
          };
        })
      );
      if (running) requestAnimationFrame(animateRunes);
    }
    animateRunes();
    return () => { running = false; };
  }, []);

  // Click burst effect for runes
  useEffect(() => {
    const handleClick = () => {
      setRunes(runes => runes.map(rune => ({ ...rune, burst: 1 })));
      setTimeout(() => {
        setRunes(runes => runes.map(rune => ({ ...rune, burst: 0 })));
      }, 300);
    };
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <>
      {/* Magical trailing orb with shiny halo */}
      <div
        ref={orbRef}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: ORB_SIZE,
          height: ORB_SIZE,
          borderRadius: '50%',
          background: ORB_COLOR,
          boxShadow: ORB_SHADOW,
          opacity: 0.38,
          pointerEvents: 'none',
          zIndex: 10,
          transition: 'box-shadow 0.3s',
          mixBlendMode: 'lighten',
          transform: `translate3d(${orb.x - ORB_SIZE / 2}px, ${orb.y - ORB_SIZE / 2}px, 0)`,
          filter: 'blur(1.2px) brightness(1.1) saturate(1.1)',
        }}
      />
      {/* Rune glyphs */}
      {runes.map(rune => (
        <div
          key={rune.id}
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            fontSize: `${2.1 + 0.6 * rune.burst}rem`,
            color: '#ffe066',
            opacity: rune.opacity,
            pointerEvents: 'none',
            zIndex: 10,
            fontFamily: 'serif',
            textShadow: '0 0 24px #e1b866, 0 0 64px #fffbe6, 0 0 32px #ffe066',
            transform: `translate3d(${orb.x + Math.cos(rune.angle) * rune.distance - 20}px, ${orb.y + Math.sin(rune.angle) * rune.distance - 20}px, 0) rotate(${rune.angle}rad)`,
            transition: 'opacity 0.2s, font-size 0.2s',
            userSelect: 'none',
          }}
        >
          {rune.glyph}
        </div>
      ))}
      {/* Sparkles */}
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            width: sparkle.size,
            height: sparkle.size,
            borderRadius: '50%',
            background: sparkle.color,
            opacity: sparkle.opacity,
            pointerEvents: 'none',
            zIndex: 10,
            transform: `translate3d(${sparkle.x - sparkle.size / 2}px, ${sparkle.y - sparkle.size / 2}px, 0) scale(${0.7 + sparkle.opacity * 0.6})`,
            filter: 'blur(2.2px)',
            boxShadow: `0 0 24px 6px ${sparkle.color}99`,
            transition: 'opacity 0.2s',
            mixBlendMode: 'lighten',
          }}
        />
      ))}
    </>
  );
};

export default CursorFollower; 