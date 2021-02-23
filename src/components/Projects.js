import React from "react";
import { HomeDiv, H1 } from "../styles/StyledDiv";
import Card from "../styles/3dCard";
import Grid from "@material-ui/core/Grid";

const Projects = () => {
  return (
    <HomeDiv>
      <Grid container style={{height:"100%"}}>
        <Grid
          item
          xs={12}
          md={2}
          lg={2}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p className="cursive">&lt;h1&gt;</p>
          <H1>Latest Projects</H1>
          <p className="cursive">&lt;/h1&gt;</p>
        </Grid>

        <Grid
          item
          xs={12}
          md={10}
          lg={10}
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            height: "100vh",
          }}
        >
          <Card element={"Furnitureland"} />
          <Card element={"SUPI"} />
          <Card element={"Whatcocktail"} />
        </Grid>
      </Grid>
    </HomeDiv>
  );
};

export default Projects;
