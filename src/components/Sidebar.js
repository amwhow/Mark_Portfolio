import React from "react" 
import { Navbar } from "../styles/Navbar"
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import MailIcon from '@material-ui/icons/Mail';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import PersonIcon from '@material-ui/icons/Person';
import Button from "@material-ui/core/Button";

export default function Sidebar({history}) {
  return (
    <Navbar >
      <div className="logo" style={{padding: "0.1rem 0.5rem"}}>Logo here</div>
      <div className="nav-buttons" style={{padding: "0"}}>
        <p><Link href="/" color="inherit" ><HomeIcon /></Link></p>
        <p><Link href="/projects" color="inherit" ><WorkIcon /></Link></p>
        <p><Link href="/about" color="inherit" ><EmojiPeopleIcon /></Link></p>
        <p><Link href="/contact" color="inherit"><MailIcon /></Link></p>
      </div>
      <div>
        <p>Github</p>
        <p>LinkedIn</p>
      </div>
    </Navbar>
  )
}

