import ParticleBg from "./components/Particles";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import { FixedDiv } from "./styles/StyledDiv";
import { Switch, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#a48c64",
      },
      secondary: {
        main: "#c33b3b",
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
  });

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
