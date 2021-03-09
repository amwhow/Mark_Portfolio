import Particles from "react-particles-js";

const ParticleBg = () => {
  return (
    <div>
      <Particles
        params={{
          particles: {
            number: {
              value: 300,
              density: {
                enable: false,
              },
            },
            size: {
              value: 5,
              random: true,
              anim: {
                speed: 3,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              out_mode: "out",
            },
          },
          interactivity: {
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
        }}
      ></Particles>
    </div>
  );
};

export default ParticleBg;
