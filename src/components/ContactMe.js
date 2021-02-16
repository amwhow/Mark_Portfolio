import React from "react";
import { HomeDiv, H1 } from "../styles/StyledDiv";
import ContactForm from "./ContactForm";
import Grid from "@material-ui/core/Grid";
import MelPhoto from "../assets/MelPhoto.jpg";

const ContactMe = () => {
  return (
    <HomeDiv>
      <p className="cursive">&lt;h1&gt;</p>
      <H1>ContactMe</H1>
      <p className="cursive">&lt;/h1&gt;</p>
      <Grid container>
        <Grid item xs={12} md={6} lg={6}>
          <p className="cursive">&lt;form&gt;</p>
          <ContactForm />
          <p className="cursive">&lt;/form&gt;</p>
        </Grid>
        <Grid item xs={12} md={6} lg={6} align="center">
          <img
            src={MelPhoto}
            alt="Melbourne"
            style={{ width: "600px" }}
          />
        </Grid>
      </Grid>
    </HomeDiv>
  );
};

export default ContactMe;
