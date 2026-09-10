'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useMemo, useRef } from 'react';

type Branch = {
  points: THREE.Vector3[];
  thickness: number;
};

function createLightningBranch(
  start: THREE.Vector3,
  end: THREE.Vector3,
  segments: number,
  thickness: number
): Branch {
  const points: THREE.Vector3[] = [];

  const direction = new THREE.Vector3()
    .subVectors(end, start);

  const length = direction.length();

  for (let i = 0; i <= segments; i++) {
    const t = i / segments;

    const point = new THREE.Vector3().lerpVectors(
      start,
      end,
      t
    );

    if (i !== 0 && i !== segments) {
      const randomness =
        length * 0.22 * (1 - Math.abs(t - 0.5));

      point.x +=
        (Math.random() - 0.5) * randomness;

      point.y +=
        (Math.random() - 0.5) * randomness;

      point.z +=
        (Math.random() - 0.5) * randomness * 0.7;
    }

    points.push(point);
  }

  return {
    points,
    thickness,
  };
}

function LightningSegment({
  start,
  end,
  thickness,
  glow = false,
}: {
  start: THREE.Vector3;
  end: THREE.Vector3;
  thickness: number;
  glow?: boolean;
}) {
  const direction = new THREE.Vector3()
    .subVectors(end, start);

  const length = direction.length();

  const midpoint = new THREE.Vector3()
    .addVectors(start, end)
    .multiplyScalar(0.5);

  const quaternion = new THREE.Quaternion();

  quaternion.setFromUnitVectors(
    new THREE.Vector3(0, 1, 0),
    direction.normalize()
  );

  return (
    <mesh
      position={midpoint}
      quaternion={quaternion}
    >
      <cylinderGeometry
        args={[
          thickness,
          thickness * 0.65,
          length,
          6,
        ]}
      />

      <meshBasicMaterial
        color={glow ? '#0088ff' : '#ffffff'}
        transparent={glow}
        opacity={glow ? 0.25 : 1}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

function LightningBolt() {
  const group = useRef<THREE.Group>(null);

  const branches = useMemo(() => {
    const result: Branch[] = [];

    // Main lightning path
    const mainPoints = [
      new THREE.Vector3(-3.4, -1.5, 0),
      new THREE.Vector3(-2.7, -0.8, 0.1),
      new THREE.Vector3(-2.25, -0.25, -0.05),
      new THREE.Vector3(-1.65, 0.25, 0.1),
      new THREE.Vector3(-1.05, 0.05, -0.05),
      new THREE.Vector3(-0.45, 0.65, 0.05),
      new THREE.Vector3(0.15, 0.35, -0.1),
      new THREE.Vector3(0.75, 0.95, 0.05),
      new THREE.Vector3(1.3, 0.65, -0.05),
      new THREE.Vector3(1.9, 1.25, 0.1),
      new THREE.Vector3(2.45, 1.15, 0),
      new THREE.Vector3(3.3, 1.9, 0.05),
    ];

    for (let i = 0; i < mainPoints.length - 1; i++) {
      result.push({
        points: [
          mainPoints[i],
          mainPoints[i + 1],
        ],
        thickness: 0.075,
      });
    }

    // Upper branches
    result.push(
      createLightningBranch(
        new THREE.Vector3(-2.25, -0.25, 0),
        new THREE.Vector3(-2.65, 0.75, 0.1),
        5,
        0.035
      )
    );

    result.push(
      createLightningBranch(
        new THREE.Vector3(-2.65, 0.75, 0),
        new THREE.Vector3(-3.2, 1.15, 0),
        4,
        0.025
      )
    );

    // Lower left branch
    result.push(
      createLightningBranch(
        new THREE.Vector3(-1.65, 0.25, 0),
        new THREE.Vector3(-1.8, -0.8, 0.05),
        5,
        0.04
      )
    );

    result.push(
      createLightningBranch(
        new THREE.Vector3(-1.8, -0.8, 0),
        new THREE.Vector3(-2.3, -1.25, 0),
        4,
        0.025
      )
    );

    // Upper middle branch
    result.push(
      createLightningBranch(
        new THREE.Vector3(-0.45, 0.65, 0),
        new THREE.Vector3(-0.15, 1.45, 0.1),
        5,
        0.035
      )
    );

    result.push(
      createLightningBranch(
        new THREE.Vector3(-0.15, 1.45, 0),
        new THREE.Vector3(0.35, 1.8, 0),
        4,
        0.022
      )
    );

    // Lower middle branch
    result.push(
      createLightningBranch(
        new THREE.Vector3(0.15, 0.35, 0),
        new THREE.Vector3(0.0, -0.65, 0.1),
        5,
        0.04
      )
    );

    result.push(
      createLightningBranch(
        new THREE.Vector3(0.0, -0.65, 0),
        new THREE.Vector3(0.5, -1.2, 0),
        4,
        0.025
      )
    );

    // Upper right branch
    result.push(
      createLightningBranch(
        new THREE.Vector3(1.3, 0.65, 0),
        new THREE.Vector3(1.65, 1.45, 0),
        5,
        0.035
      )
    );

    // Lower right branch
    result.push(
      createLightningBranch(
        new THREE.Vector3(1.9, 1.25, 0),
        new THREE.Vector3(2.25, 0.3, 0),
        5,
        0.035
      )
    );

    return result;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (group.current) {
      // Floating movement
      group.current.position.y =
        Math.sin(t * 1.3) * 0.08;

      // Gentle 3D rotation
      group.current.rotation.y =
        Math.sin(t * 0.5) * 0.18;

      group.current.rotation.x =
        Math.sin(t * 0.7) * 0.08;
    }
  });

  return (
    <group
      ref={group}
      rotation={[0, 0, 0.05]}
    >
      {/* Blue glow layer */}
      <group scale={1.8}>
        {branches.map((branch, branchIndex) =>
          branch.points
            .slice(0, -1)
            .map((point, i) => (
              <LightningSegment
                key={`glow-${branchIndex}-${i}`}
                start={point}
                end={branch.points[i + 1]}
                thickness={
                  branch.thickness * 1.8
                }
                glow
              />
            ))
        )}
      </group>

      {/* Main lightning */}
      {branches.map((branch, branchIndex) =>
        branch.points
          .slice(0, -1)
          .map((point, i) => (
            <LightningSegment
              key={`main-${branchIndex}-${i}`}
              start={point}
              end={branch.points[i + 1]}
              thickness={branch.thickness}
            />
          ))
      )}

      {/* Blue inner lightning */}
      <group scale={1.12}>
        {branches.map((branch, branchIndex) =>
          branch.points
            .slice(0, -1)
            .map((point, i) => (
              <LightningSegment
                key={`blue-${branchIndex}-${i}`}
                start={point}
                end={branch.points[i + 1]}
                thickness={
                  branch.thickness * 0.55
                }
                glow
              />
            ))
        )}
      </group>
    </group>
  );
}

function Sparks() {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 180;
    const data = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      data[i * 3] =
        (Math.random() - 0.5) * 7;

      data[i * 3 + 1] =
        (Math.random() - 0.5) * 4;

      data[i * 3 + 2] =
        (Math.random() - 0.5) * 1.5;
    }

    return data;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y =
        state.clock.getElapsedTime() * 0.08;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <primitive
          attach="attributes-position"
          object={
            new THREE.BufferAttribute(
              positions,
              3
            )
          }
        />
      </bufferGeometry>

      <pointsMaterial
        color="#008cff"
        size={0.025}
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.15} />

      <pointLight
        position={[0, 0, 2]}
        intensity={8}
        distance={7}
        color="#008cff"
      />

      <LightningBolt />

      <Sparks />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.2}
      />
    </>
  );
}

export default function Events3D() {
  return (
    <section className="events-3d">
      <Canvas
        camera={{
          position: [0, 0, 6],
          fov: 50,
        }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
    </section>
  );
}