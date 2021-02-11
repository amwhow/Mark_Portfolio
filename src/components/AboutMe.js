import React from "react";
import { HomeDiv, H1 } from "../styles/StyledDiv";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const AboutMe = () => {
  return (
    <HomeDiv>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={6}>
          <p className="cursive">&lt;h1&gt;</p>
          <H1>Who's this guy?</H1>
          <p className="cursive">&lt;/h1&gt;</p>
          <span className="cursive">
            <p>&lt;p&gt;</p> 
            <p>React &amp; Hi there, I am Mark, a junior full-stack web developer who is exploring this new world. Building web apps gives me a huge sense of achievement and providing great user experiences is my pursuit. </p>
            <p>&lt;/p&gt;</p>
          </span>
          <span className="cursive">
            <p>
              &lt;span&gt; Eager to explore the programming world &lt;/span&gt;
            </p>
          </span>
          <p>
            &lt;button&gt;{" "}
            <Button variant="contained" color="primary">
              See my projects
            </Button>{" "}
            &lt;/button&gt;
          </p>
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
          <h1>Mark Logo here</h1>
        </Grid>
      </Grid>
    </HomeDiv>
  );
};

export default AboutMe;
