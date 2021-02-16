import React from "react";
import { HomeDiv, H1 } from "../styles/StyledDiv";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import markLogo from "../assets/mark_logo_200px.png";
import { useHistory } from "react-router-dom";

const Home = () => {
  let history = useHistory();
  return (
    <HomeDiv>
      <Grid container>
        <Grid item xs={12} md={6} lg={6}>
          <p className="cursive">&lt;h1&gt;</p>
          <H1>Hi, </H1>
          <H1>I am Mark,</H1>
          <H1>A full-stack web developer</H1>
          <p className="cursive">&lt;/h1&gt;</p>
          <p className="cursive">&lt;p&gt;</p>
          <p>React &amp; Rails Developer</p>
          <p>Eager to explore the programming world</p>
          <p className="cursive">&lt;/p&gt;</p>
          <p className="cursive">&lt;button&gt; </p>
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push("/projects")}
          >
            See my projects
          </Button>{" "}
          <p className="cursive">&lt;/button&gt;</p>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          lg={5}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <img
            src={markLogo}
            alt="Mark's logo"
            style={{ width: "320px", height: "320px" }}
          />
        </Grid>
      </Grid>
    </HomeDiv>
  );
};

export default Home;
