"use client";

import { Canvas, invalidate } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import Shuriken from "./Shuriken";
import { Environment, Scroll } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CameraRig from "./CameraRig";
import { useScrollStore } from "../../hooks/useScrollStore";
import { CHAPTERS } from "../../constants/timeline";

gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
    const shurikenRef = useRef<any>(null);

    const setRef = (node: any) => {
        if (node && !shurikenRef.current) {
            shurikenRef.current = node;
            setupAnimations(node);
        }
    };

    const setupAnimations = (shuriken: any) => {
        ScrollTrigger.getAll().forEach(t => t.kill());
        const { setActiveChapter } = useScrollStore.getState();

        CHAPTERS.forEach((chapter, i) => {
            const next = CHAPTERS[i + 1];
            if (!next) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: chapter.trigger,
                    start: 'top top',
                    end: "bottom top",
                    scrub: 1.2,
                    onEnter: () => setActiveChapter(i),
                    onEnterBack: () => setActiveChapter(i),
                }
            });


            tl.to(shuriken.position, {
                x: next.model.position[0],
                y: next.model.position[1],
                z: next.model.position[2],
                ease: "none",
                onUpdate: invalidate,
            }, 0);

            tl.to(shuriken.rotation, {
                x: next.model.rotation[0],
                y: next.model.rotation[1],
                z: next.model.rotation[2],
                ease: "none",
                onUpdate: invalidate,
            }, 0);
        });

        ScrollTrigger.refresh();
    };

    return (
        <div className="w-full h-screen fixed top-0 left-0 pointer-events-none" style={{zIndex:3}}>
            <Canvas
                camera={{ position: [0, 0, 4], fov: 45 }}
                frameloop="demand"
                gl={{ alpha: true }}
                style={{background: "transparent"}}
            >
                <ambientLight intensity={0.4} />
                <directionalLight position={[3, 3, 3]} intensity={1.5} />
                <directionalLight position={[-3, -2, -2]} intensity={0.8} color="#ff0000" />
                <Environment preset="city" />
                <CameraRig />
                <Suspense fallback={null}>
                    <Shuriken ref={setRef} />
                </Suspense>
            </Canvas>
        </div>
    );
}