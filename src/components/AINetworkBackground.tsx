import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface NodeData {
  position: THREE.Vector3;
  connections: number[];
  pulsePhase: number;
}

const NebulaScene = () => {
  const nodesRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.Group>(null);
  const pulsesRef = useRef<THREE.Group>(null);
  const nebulaRef = useRef<THREE.Points>(null);
  const nebula2Ref = useRef<THREE.Points>(null);

  // Generate neural network nodes
  const { nodes, nodePositions } = useMemo(() => {
    const nodeCount = 40;
    const nodes: NodeData[] = [];
    const positions = new Float32Array(nodeCount * 3);

    for (let i = 0; i < nodeCount; i++) {
      const x = (Math.random() - 0.5) * 30;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 15;
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Create connections
      const connections: number[] = [];
      const maxConnections = Math.floor(Math.random() * 2) + 2;
      
      for (let j = 0; j < i && connections.length < maxConnections; j++) {
        if (Math.random() > 0.85) {
          connections.push(j);
        }
      }

      nodes.push({
        position: new THREE.Vector3(x, y, z),
        connections,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    return { nodes, nodePositions: positions };
  }, []);

  // Generate pink/red nebula clouds (like the center of the reference image)
  const { nebulaPositions, nebulaColors } = useMemo(() => {
    const nebulaCount = 200;
    const positions = new Float32Array(nebulaCount * 3);
    const colors = new Float32Array(nebulaCount * 3);

    for (let i = 0; i < nebulaCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 40 + 10;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 35;
      positions[i * 3 + 2] = Math.sin(angle) * radius;

      // Pink/red nebula colors
      const intensity = Math.random();
      colors[i * 3] = 0.9 + Math.random() * 0.1; // Red
      colors[i * 3 + 1] = 0.3 + Math.random() * 0.3; // Green
      colors[i * 3 + 2] = 0.5 + Math.random() * 0.3; // Blue (creates pink/magenta)
    }

    return { nebulaPositions: positions, nebulaColors: colors };
  }, []);

  // Generate blue nebula clouds (outer glow)
  const { nebula2Positions, nebula2Colors } = useMemo(() => {
    const nebulaCount = 150;
    const positions = new Float32Array(nebulaCount * 3);
    const colors = new Float32Array(nebulaCount * 3);

    for (let i = 0; i < nebulaCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 50 + 30;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = Math.sin(angle) * radius;

      // Cyan/blue nebula colors
      colors[i * 3] = 0.2 + Math.random() * 0.3; // Red
      colors[i * 3 + 1] = 0.6 + Math.random() * 0.3; // Green
      colors[i * 3 + 2] = 0.9 + Math.random() * 0.1; // Blue
    }

    return { nebula2Positions: positions, nebula2Colors: colors };
  }, []);

  // Animate everything
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    // Animate nodes - gentle floating
    if (nodesRef.current) {
      const positions = nodesRef.current.geometry.attributes.position.array as Float32Array;
      nodes.forEach((node, i) => {
        positions[i * 3] = node.position.x + Math.sin(time * 0.3 + node.pulsePhase) * 0.3;
        positions[i * 3 + 1] = node.position.y + Math.cos(time * 0.25 + node.pulsePhase) * 0.25;
        positions[i * 3 + 2] = node.position.z + Math.sin(time * 0.2 + node.pulsePhase) * 0.2;
      });
      nodesRef.current.geometry.attributes.position.needsUpdate = true;
    }

    // Animate pulses along connections
    if (pulsesRef.current) {
      pulsesRef.current.children.forEach((pulse, i) => {
        const speed = 0.2 + (i % 3) * 0.1;
        pulse.userData.progress = (pulse.userData.progress + speed * 0.016) % 1;
        
        if (pulse.userData.progress < 0.05 || pulse.userData.progress > 0.95) {
          (pulse as THREE.Mesh).visible = false;
        } else {
          (pulse as THREE.Mesh).visible = true;
          const start = pulse.userData.start;
          const end = pulse.userData.end;
          pulse.position.lerpVectors(start, end, pulse.userData.progress);
          
          const material = (pulse as THREE.Mesh).material as THREE.MeshBasicMaterial;
          const fadeInOut = pulse.userData.progress < 0.2 
            ? pulse.userData.progress * 5
            : pulse.userData.progress > 0.8
            ? (1 - pulse.userData.progress) * 5
            : 1;
          material.opacity = fadeInOut * 0.8;
        }
      });
    }

    // Animate pink nebula - gentle pulsing only
    if (nebulaRef.current) {
      // Gentle pulsing opacity
      const material = nebulaRef.current.material as THREE.PointsMaterial;
      material.opacity = 0.15 + Math.sin(time * 0.2) * 0.03;
    }

    // Animate blue nebula - gentle pulsing only
    if (nebula2Ref.current) {
      // Gentle pulsing opacity
      const material = nebula2Ref.current.material as THREE.PointsMaterial;
      material.opacity = 0.12 + Math.sin(time * 0.15 + 1) * 0.03;
    }
  });

  // Create connection lines
  const connectionLines = useMemo(() => {
    const lines: JSX.Element[] = [];
    nodes.forEach((node, i) => {
      node.connections.forEach((targetIdx) => {
        if (targetIdx < nodes.length) {
          const target = nodes[targetIdx];
          const points = [node.position.clone(), target.position.clone()];
          const geometry = new THREE.BufferGeometry().setFromPoints(points);
          
          lines.push(
            <primitive 
              key={`line-${i}-${targetIdx}`} 
              object={new THREE.Line(
                geometry,
                new THREE.LineBasicMaterial({ 
                  color: '#6CA8FF', 
                  opacity: 0.2,
                  transparent: true,
                  linewidth: 1,
                  blending: THREE.AdditiveBlending
                })
              )}
            />
          );
        }
      });
    });
    return lines;
  }, [nodes]);

  // Create traveling pulses
  const travelingPulses = useMemo(() => {
    const pulses: JSX.Element[] = [];
    const pulseCount = 15;
    
    nodes.forEach((node, i) => {
      if (i < pulseCount && node.connections.length > 0) {
        const targetIdx = node.connections[Math.floor(Math.random() * node.connections.length)];
        const target = nodes[targetIdx];
        
        pulses.push(
          <mesh 
            key={`pulse-${i}`}
            userData={{
              start: node.position.clone(),
              end: target.position.clone(),
              progress: Math.random()
            }}
          >
            <sphereGeometry args={[0.12, 8, 8]} />
            <meshBasicMaterial 
              color="#E9D5FF" 
              transparent 
              opacity={0.8}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
        );
      }
    });
    
    return pulses;
  }, [nodes]);

  return (
    <>
      {/* Neural Network Nodes */}
      <points ref={nodesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={nodes.length}
            array={nodePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial 
          size={0.2} 
          color="#E9D5FF" 
          transparent 
          opacity={0.9}
          sizeAttenuation={true}
        />
      </points>

      {/* Connection Lines */}
      <group ref={linesRef}>
        {connectionLines}
      </group>

      {/* Traveling Pulses */}
      <group ref={pulsesRef}>
        {travelingPulses}
      </group>

      {/* Pink/Red Nebula - center glow */}
      <points ref={nebulaRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={nebulaPositions.length / 3}
            array={nebulaPositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={nebulaColors.length / 3}
            array={nebulaColors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={4}
          vertexColors
          transparent
          opacity={0.15}
          sizeAttenuation={true}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Blue Nebula - outer glow */}
      <points ref={nebula2Ref}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={nebula2Positions.length / 3}
            array={nebula2Positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={nebula2Colors.length / 3}
            array={nebula2Colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={5}
          vertexColors
          transparent
          opacity={0.12}
          sizeAttenuation={true}
          blending={THREE.AdditiveBlending}
        />
      </points>

    </>
  );
};

export const AINetworkBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      {/* Nebula gradient overlays - inspired by the reference image */}
      <div 
        className="absolute inset-0" 
        style={{
          background: `
            radial-gradient(ellipse at 50% 50%, rgba(255, 105, 180, 0.12) 0%, transparent 40%),
            radial-gradient(ellipse at 40% 60%, rgba(218, 112, 214, 0.10) 0%, transparent 45%),
            radial-gradient(ellipse at 60% 40%, rgba(100, 149, 237, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 30% 70%, rgba(75, 0, 130, 0.06) 0%, transparent 55%)
          `,
          pointerEvents: 'none'
        }}
      />
      
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.1} />
        <NebulaScene />
      </Canvas>
    </div>
  );
};
