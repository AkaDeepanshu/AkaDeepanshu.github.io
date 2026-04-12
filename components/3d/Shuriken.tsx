"use client";

import { useGLTF } from "@react-three/drei";
import { forwardRef, useRef } from "react";
import { invalidate, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import useMouse from "@/hooks/useMouse";


const Shuriken = forwardRef((props, ref: any) => {
    const model = useGLTF("/model/shuriken-optimized.glb");
    const mouse = useMouse();


    // Stores the GSAP base rotation so mouse is additive, not fighting
    const baseRotation = useRef({ x: -0.3, y: -0.99 });

    useFrame(() => {
        if (!ref.current) return;

        // Read GSAP's current value as base, add mouse offset on top
        baseRotation.current.x = ref.current.rotation.x;
        baseRotation.current.y = ref.current.rotation.y;

        ref.current.rotation.x +=
            (mouse.current.y * 0.12 - ref.current.rotation.x + baseRotation.current.x) * 0.04;
        ref.current.rotation.y +=
            (mouse.current.x * 0.18 - ref.current.rotation.y + baseRotation.current.y) * 0.04;

        invalidate();
    });
 if (!model) return null;

  return (
    <group
      ref={ref}
      position={[1.5, 0, 0]}
      rotation={[-0.3, -0.99, 0.34]}
      scale={1.3}
    >
      <primitive object={model.scene} />
    </group>
  );
});

Shuriken.displayName = "Shuriken";
export default Shuriken;
