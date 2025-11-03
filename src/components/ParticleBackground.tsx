import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

interface ParticleBackgroundProps {
  density?: number;
  interactive?: boolean;
}

export const ParticleBackground = ({ 
  density = 80, 
  interactive = true 
}: ParticleBackgroundProps) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      className="particles-container"
      init={particlesInit}
      options={{
        fpsLimit: 120,
        detectRetina: true,
        particles: {
          number: {
            value: density,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: ["#00D4FF", "#9D4EDD", "#FFFFFF"],
          },
          shape: {
            type: ["circle", "triangle"],
          },
          opacity: {
            value: 0.5,
            random: {
              enable: true,
              minimumValue: 0.1,
            },
            animation: {
              enable: true,
              speed: 0.5,
              minimumValue: 0.1,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 5 },
            animation: {
              enable: true,
              speed: 0.8,
              minimumValue: 1,
              sync: false,
            },
          },
          links: {
            enable: true,
            distance: 150,
            color: "#00D4FF",
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "bounce",
            },
            attract: {
              enable: false,
            },
          },
          collisions: {
            enable: true,
          },
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: interactive,
              mode: "repulse",
            },
            onClick: {
              enable: interactive,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              quantity: 4,
            },
          },
        },
      }}
    />
  );
};
