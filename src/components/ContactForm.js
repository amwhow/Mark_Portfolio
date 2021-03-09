import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
  input: {
    color: "white",
  },
}));

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#c33b3b",
    },
    "& label": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#c33b3b",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "#c33b3b",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#c33b3b",
      },
    },
    input: {
      color: "white",
    },
  },
})(TextField);

export default function MyForm() {
  const [status, setStatus] = useState("");
  const classes = useStyles();

  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  };

  return (
    <form
      onSubmit={submitForm}
      action="https://formspree.io/f/xaylzoba"
      method="POST"
      className={classes.root}
      noValidate
      autoComplete="off"
    >
      <Grid container spacing={2}>
        {/* custom form section */}
        <Grid item xs={12} md={6} lg={6}>
          <CssTextField
            name="name"
            className={classes.margin}
            InputProps={{
              className: classes.input,
            }}
            label="Name"
            variant="outlined"
            id="custom-css-outlined-input"
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <CssTextField
            name="email"
            className={classes.margin}
            InputProps={{
              className: classes.input,
            }}
            label="email"
            variant="outlined"
            id="custom-css-outlined-input"
          />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <CssTextField
            name="message"
            className={classes.margin}
            InputProps={{
              className: classes.input,
            }}
            label="Message"
            multiline
            rows={6}
            variant="outlined"
            id="custom-css-outlined-input"
          />
        </Grid>
        <div style={{ marginLeft: "16px" }}>
          {status === "SUCCESS" ? (
            <p>Thank you for your message, I will get in touch soon!</p>
          ) : (
            <Button variant="outlined" color="secondary" type="submit">
              Submit
            </Button>
          )}
          {status === "ERROR" && (
            <p>Oops! There was an error, please try again.</p>
          )}
        </div>
      </Grid>
    </form>
  );
}
