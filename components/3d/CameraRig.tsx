
import { useFrame, useThree } from "@react-three/fiber";
import { use, useRef } from "react";
import * as THREE from "three";
import { useScrollStore } from "../../hooks/useScrollStore";
import { CHAPTERS } from "../../constants/timeline";

export default function CameraRig() {
    const {camera} =   useThree();
    const target = useRef(new THREE.Vector3(0,0,4));

    useFrame(()=>{
        const {activeChapter} = useScrollStore.getState();
        const chapter = CHAPTERS[activeChapter];
        if(!chapter) return;

        const [cx, cy, cz] = chapter.camera.position;
        target.current.set(cx, cy, cz);

        camera.position.lerp(target.current, 0.05);
    });

    return null;
}