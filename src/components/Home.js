import React from "react";
import { HomeDiv, H1 } from "../styles/StyledDiv";
import Button from "@material-ui/core/Button";

const Home = () => {
  return (
    <HomeDiv>
      <p className="cursive">&lt;h1&gt;</p>
      <H1>Hi, </H1>
      <H1>I am Mark</H1>
      <H1>A full-stack web developer</H1>
      <p className="cursive">&lt;/h1&gt;</p>
      <span className="cursive">
        <p>&lt;span&gt; React &amp; Rails Developer &lt;/span&gt;</p>
      </span>
      <span className="cursive">
        <p>&lt;span&gt; Eager to explore the programming world &lt;/span&gt;</p>
      </span>
      <p>
        &lt;button&gt;{" "}
        <Button variant="contained" color="primary">
          See my projects
        </Button>{" "}
        &lt;/button&gt;
      </p>
    </HomeDiv>
  );
};

export default Home;
