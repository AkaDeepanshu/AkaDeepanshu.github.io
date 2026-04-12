"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  if (!contentRef.current) return;
  const container = contentRef.current;
  const particles: HTMLDivElement[] = [];

  // Black dust — left 55% (yellow area)
  for (let i = 0; i < 50; i++) {
    const d = document.createElement("div");
    const size = Math.random() * 2.5 + 1;
    // Force uniform distribution across columns
    const col = (i % 10) / 10; // 0.0, 0.1, 0.2 ... 0.9
    const x = (col * 55) + (Math.random() * 5.5); // each column gets a 5.5% slot
    const y = Math.random() * 100;
    const delay = Math.random() * 8;
    const dur = Math.random() * 5 + 7;
    const dx = (Math.random() - 0.5) * 25;

    d.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: #0a0a0a;
      pointer-events: none;
      width: ${size}px;
      height: ${size}px;
      left: ${x}%;
      top: ${y}%;
      opacity: 0;
      animation: heroDust ${dur}s ${delay}s linear infinite;
      --dx: ${dx}px;
    `;
    container.appendChild(d);
    particles.push(d);
  }

  // Yellow dust — right 42% (photo/dark area)
  for (let i = 0; i < 30; i++) {
    const d = document.createElement("div");
    const size = Math.random() * 2 + 1;
    const col = (i % 6) / 6;
    const x = 58 + (col * 42) + (Math.random() * 7); // 58–100% range
    const y = Math.random() * 100;
    const delay = Math.random() * 8;
    const dur = Math.random() * 5 + 7;
    const dx = (Math.random() - 0.5) * 25;

    d.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: #F5C900;
      pointer-events: none;
      width: ${size}px;
      height: ${size}px;
      left: ${x}%;
      top: ${y}%;
      opacity: 0;
      animation: heroDust ${dur}s ${delay}s linear infinite;
      --dx: ${dx}px;
    `;
    container.appendChild(d);
    particles.push(d);
  }

  return () => particles.forEach((el) => el.remove());
}, []);
  return (
    <>
      <style>{`
        @keyframes heroDust {
          0%   { transform: translateY(0px) translateX(0px); opacity: 0; }
          15%  { opacity: 0.8; }
          85%  { opacity: 0.4; }
          100% { transform: translateY(-60px) translateX(var(--dx)); opacity: 0; }
        }
        @keyframes scanline {
          0%   { transform: translateX(-100%); opacity: 0; }
          50%  { opacity: 0.8; }
          100% { transform: translateX(100%); opacity: 0; }
        }
      `}</style>

      <section
        id="section-hero"
        className="relative h-screen"
      >
        {/* Yellow bg — left 58%, z:1 below canvas */}
        <div style={{
          position: "absolute",
          top: 0, left: 0,
          width: "58%", height: "100%",
          background: "#F5C900",
          zIndex: 1,
          pointerEvents: "none"
        }} />

        {/* Fade — yellow bleeds into photo panel */}
        <div style={{
          position: "absolute",
          top: 0, left: "50%",
          width: "16%", height: "100%",
          background: "linear-gradient(to right, #F5C900, transparent)",
          zIndex: 2,
          pointerEvents: "none"
        }} />

        {/* Photo panel — right 42%, z:1 */}
        <div style={{
          position: "absolute",
          top: 0, right: 0,
          width: "42%", height: "100%",
          zIndex: 1,
          overflow: "hidden",
        }}>
          <Image
            src="/images/profile2.png"
            alt="Deepanshu Sharma"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "top center",
            }}
            priority
          />
          {/* Subtle left-edge fade so photo blends into yellow */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, #F5C900 0%, transparent 30%)",
            zIndex: 2,
          }} />
        </div>

        {/* Content layer — z:5, above canvas z:3 */}
        <div
          ref={contentRef}
          className="absolute inset-0"
          style={{ zIndex: 5 }}
        >
          {/* Top-left handle */}
          <div className="absolute top-8 left-10 flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0a0a0a] opacity-60" />
            <span
              className="text-[#0a0a0a] opacity-60 text-xs"
              style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.2em" }}
            >
              @akadeepanshu
            </span>
          </div>

          {/* Top-right year */}
          <div
            className="absolute top-8 right-10 text-white opacity-40 text-xs"
            style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.15em" }}
          >
            '26
          </div>

          {/* Main text — bottom left */}
          <div className="absolute left-10" style={{ bottom: "72px" }}>
            <p
              className="text-[#0a0a0a] opacity-50 uppercase mb-2"
              style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.35em" }}
            >
              Software Development Engineer
            </p>
            <div className="w-8 h-px bg-[#0a0a0a] opacity-20 mb-5" />
            <h1
              className="text-[#0a0a0a] leading-[0.92] mb-7"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(48px, 7vw, 88px)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
              }}
            >
              Deepanshu
              <br />
              Sharma
            </h1>
            <p
              className="text-[#0a0a0a] opacity-55"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                fontWeight: 300,
                letterSpacing: "0.04em",
                lineHeight: 1.9,
              }}
            >
              I engineer systems.
              <br />
              I craft interfaces.
            </p>
          </div>

          {/* Corner bracket — bottom left */}
          <div className="absolute bottom-10 left-10">
            <div className="w-6 h-px bg-[#0a0a0a] opacity-25" />
            <div className="w-px h-6 bg-[#0a0a0a] opacity-25" />
          </div>

          {/* Scroll hint — bottom right */}
          <div className="absolute bottom-8 right-10 flex items-center gap-3">
            <span
              className="text-white opacity-35 uppercase"
              style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.25em" }}
            >
              scroll
            </span>
            <div
              className="relative overflow-hidden"
              style={{ width: "32px", height: "1px", background: "rgba(255,255,255,0.3)" }}
            >
              <div
                className="absolute inset-0 bg-white"
                style={{ animation: "scanline 2s ease-in-out infinite" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}