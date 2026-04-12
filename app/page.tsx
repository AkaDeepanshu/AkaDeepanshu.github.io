"use client";

import Scene from "@/components/3d/Scene";
import SmoothScroll from "@/layout/SmoothScroll";
import Arsenal from "@/sections/Arsenal";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience";
import Hero from "@/sections/Hero";
import Story from "@/sections/Story";
import Work from "@/sections/Work";


export default function Home() {
  return (
    <SmoothScroll>
      <main className="bg-[#0a0a0a] text-white">
        <Scene />
        <Hero />
        <Story />
        <Arsenal />
        <Experience />
        <Work />
        <Contact />
      </main>
    </SmoothScroll>
  );
}