import React from "react";
import { HomeDiv, H1 } from "../styles/StyledDiv";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import Slides from "../styles/Slides";

const AboutMe = () => {
  let history = useHistory();
  return (
    <HomeDiv>
      <Grid container justify="space-between" style={{ height: "100%" }}>
        <Grid
          item
          xs={12}
          md={4}
          lg={4}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p className="cursive">&lt;h1&gt;</p>
          <H1>Who's this guy?</H1>
          <p className="cursive">&lt;/h1&gt;</p>
          <p className="cursive">&lt;p&gt;</p>
          <p>
            Hi there, I am Mark, a junior full-stack web developer who is
            exploring this new world. Building web apps gives me a huge sense of
            achievement and providing great user experiences is my pursuit.
          </p>

          <p>
            After getting my master degree at UoM, I started working as a
            translator in Melbourne in 2018. Then I quitted in 2020 as I found
            my interest in coding(tried a bit of python and felt good!) and
            creating web pages, and I decided to change my career path to web
            development. And here I am, on my way to be a professional
            full-stack developer.
          </p>
          <p className="cursive">&lt;/p&gt;</p>
          <p className="cursive">&lt;button&gt; </p>
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push("/contact")}
            style={{ width: "fit-content" }}
          >
            Contact me
          </Button>
          <p className="cursive">&lt;/button&gt;</p>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Image slides function */}
          <Slides />
        </Grid>
      </Grid>
    </HomeDiv>
  );
};

export default AboutMe;
