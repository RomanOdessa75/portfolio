// Earth.tsx ('use client' компонент)
"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import { TextureLoader } from "three";
import { motion } from "framer-motion-3d";

const Earth = () => {
  const sceneRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start end", "end start"],
  });

  const [color, normal, aoMap] = useLoader(TextureLoader, [
    "/assets/color.jpg",
    "/assets/normal.png",
    "/assets/occlusion.jpg",
  ]);

  return (
    <div ref={sceneRef} className="w-full h-full">
      <Canvas
        style={{
          width: "100%",
          height: "100%",
        }}
        camera={{ position: [0, 0, 5], fov: 60 }}
      >
        <ambientLight intensity={0.1} />
        <directionalLight intensity={3.5} position={[1, 0, -0.25]} />
        <motion.mesh
          scale={2.5}
          rotation-y={scrollYProgress}
          position={[0, 0, 0]}
        >
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial
            map={color}
            normalMap={normal}
            aoMap={aoMap}
          />
        </motion.mesh>
      </Canvas>
    </div>
  );
};

export default Earth;