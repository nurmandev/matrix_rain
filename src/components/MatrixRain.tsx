import { useMemo, useRef, useEffect } from 'react';
import { random, useCurrentFrame, useVideoConfig } from 'remotion';

export default function MatrixRain() {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const katakana =
    'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
  const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const nums = '0123456789';
  const symbols = '@#$%^&*';
  const characters = useMemo(() => katakana + latin + nums + symbols, []);

  const fontSize = 20;
  const columns = useMemo(() => Math.floor(width / fontSize), [width, fontSize]);

  const drops = useMemo(() => {
    return Array.from({ length: columns }).map((_, i) => ({
      x: i * fontSize,
      yOffset: random(i) * height,
      speed: random(i) * 15 + 10,
    }));
  }, [columns, fontSize, height]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, width, height);

    ctx.font = `bold ${fontSize}px monospace`;
    ctx.shadowBlur = 8;
    ctx.shadowColor = 'rgba(59, 130, 246, 0.9)';

    drops.forEach((drop, i) => {
      const y = (drop.yOffset + frame * drop.speed) % height;

      const opacity = 1 - (y / height) * 0.6;
      ctx.fillStyle = `rgba(0, 255, 0, ${opacity})`;

      const charIndex = Math.floor((frame + i) / 5) % characters.length;
      const char = characters[charIndex];

      ctx.fillText(char, drop.x, y);
    });
  }, [frame, width, height, drops, characters]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{
        width,
        height,
        position: 'relative',
      }}
    />
  );
}
