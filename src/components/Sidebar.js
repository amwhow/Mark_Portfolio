import React from "react";
import { Navbar } from "../styles/Navbar";
import HomeIcon from "@material-ui/icons/Home";
import WorkIcon from "@material-ui/icons/Work";
import MailIcon from "@material-ui/icons/Mail";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import { useHistory } from "react-router-dom";
import githubLogo from "../assets/GitHub-Mark-Light-64px.png";
import linkedInLogo from "../assets/LinkedIn.png";
import markLogo from "../assets/mark_logo.png";
import "../styles/styles.css";

export default function Sidebar() {
  let history = useHistory();
  return (
    <Navbar>
      <div className="logo" style={{ padding: "0.1rem 0.5rem" }}>
        <img
          src={markLogo}
          alt="Mark's logo"
          onClick={() => history.push("/")}
        />
      </div>
      <div className="nav-buttons" style={{ padding: "0" }}>
        <p onClick={() => history.push("/")}>
          <HomeIcon />
        </p>
        <p onClick={() => history.push("/projects")}>
          <WorkIcon />
        </p>
        <p onClick={() => history.push("/about")}>
          <EmojiPeopleIcon />
        </p>
        <p onClick={() => history.push("/contact")}>
          <MailIcon />
        </p>
      </div>
      <div className="social-app-buttons">
        <p onClick={() => window.open("https://github.com/amwhow/", "_blank")}>
          <img src={githubLogo} alt="Github" />
        </p>
        <p
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/mark-huang-a95015142/",
              "_blank"
            )
          }
        >
          <img src={linkedInLogo} alt="LinkedIn" />
        </p>
      </div>
    </Navbar>
  );
}
