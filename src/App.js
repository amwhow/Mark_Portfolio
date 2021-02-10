import ParticleBg from "./components/Particles"
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import { FixedDiv } from "./styles/StyledDiv";
import { Switch, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div>
        <FixedDiv>
          <ParticleBg />
        </FixedDiv>
        <FixedDiv>
          <Sidebar />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <AboutMe />
            </Route>
            <Route exact path="/contact">
              <ContactMe />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
          </Switch>
        </FixedDiv>
      </div>
    </>
  );
}

export default App;
