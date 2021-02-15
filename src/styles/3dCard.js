import React from "react";
import { useSpring, animated } from "react-spring";
import "./styles.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import ProjectOverview from "../components/ProjectOverview"
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    color: "black"
  },
}));

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.05,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function Card(element) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 300, friction: 30 },
  }));
  const ProjectData = {
    "Furnitureland": {"url": "https://furniture-land.herokuapp.com", "techStack": "Ruby/Rails, PostgreSQL", "description": "A full-stack second-hand furniture trading webapp.", "image1":""},
    "Whatcocktail": {"url": "https://whatcocktail.netlify.app/", "techStack": "HTML, JavaScript", "description": "A random cocktail generator with recipes.", "image1": ""},
    "SUPI": {"url": "https://supi.netlify.app/", "techStack": "React, Rails, PostgreSQL", "description": "A full-stack supplier management system.", "image1": ""}
  };
  const handleClick = (e, element) => {
    e.preventDefault();
    window.open(ProjectData[element["element"]]["url"], "_blank") ||
      window.location.replace(ProjectData[element["element"]]["url"]);
  };
  return (
    <>
      <div className="cardContainer">
        <p>{element["element"]}</p>
        <animated.div
          class={`card ${element["element"]}`}
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          onClick={handleOpen}
          style={{ transform: props.xys.interpolate(trans) }}
        />
        <p>{ProjectData[element["element"]]["techStack"]}</p>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Grid container spacing={2} align="center">
              <Grid item xs={12} md={12} lg={12}>
                <h1>{element["element"]}</h1>
                <h3>{ProjectData[element["element"]]["description"]}</h3>
                <hr/>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <ProjectOverview project={element["element"]}/>
              </Grid>
              <Grid item xs={12} md={12} lg={12} >
                <Button onClick={(e) => handleClick(e, element)}>Go to Site</Button>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </>
  );
}
