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
      <Grid container justify="space-between">
        {/* form on the left hand side */}
        <Grid item xs={12} md={6} lg={6}>
          <p className="cursive">&lt;form&gt;</p>
          <ContactForm />
          <p className="cursive">&lt;/form&gt;</p>
        </Grid>
        {/* Melbourne image on the right hand side */}
        <Grid item xs={12} md={6} lg={6} align="center">
          <img src={MelPhoto} alt="Melbourne" style={{ width: "500px" }} />
        </Grid>
      </Grid>
    </HomeDiv>
  );
};

export default ContactMe;
