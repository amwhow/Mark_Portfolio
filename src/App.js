import ParticleBg from "./components/Particles";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <div className="canvas" style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}>
        <ParticleBg />
      </div>
      <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}>
          <Sidebar />
          <Home />
      </div>
    </div>
  );
}

export default App;
