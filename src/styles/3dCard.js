import React from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";
import "./styles.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

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
    config: { mass: 8, tension: 200, friction: 40 },
  }));
  const ProjectData = {
    "furnitureland": {"url": "https://furniture-land.herokuapp.com", "techStack": "Ruby/Rails, PostgreSQL", "image1":""},
    "whatcocktail": {"url": "https://whatcocktail.netlify.app/", "techStack": "HTML, JavaScript", "image1": ""},
    "SUPI": {"url": "https://supi.netlify.app/", "techStack": "React, Rails, PostgreSQL", "image1": ""}
  };
  const handleClick = (e, element) => {
    e.preventDefault();
    window.open(ProjectData[element]["url"], "_blank") ||
      window.location.replace("https://support.wwf.org.uk");
  };
  return (
    <>
      <div className="cardContainer">
        <animated.div
          class={`card ${element["element"]}`}
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          onClick={handleOpen}
          style={{ transform: props.xys.interpolate(trans) }}
        />
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
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">
              react-transition-group animates me.
            </p>
          </div>
        </Fade>
      </Modal>
    </>
  );
}
