import React from "react" 
import { Navbar } from "../styles/Navbar"
import Link from '@material-ui/core/Link';


export default function Sidebar() {
  return (
    <Navbar>
      <div className="logo" style={{padding: "0.1rem 0.5rem"}}>Logo here</div>
      <div className="nav-buttons" style={{padding: "23vh 0"}}>
        <p><Link href="/" color="inherit" >Home</Link></p>
        <p><Link href="/projects" color="inherit" >Projects</Link></p>
        <p><Link href="/about" color="inherit" >About</Link></p>
        <p><Link href="/contact" color="inherit" >Contact me</Link></p>
      </div>
      <div>
        <p>Github</p>
        <p>LinkedIn</p>
      </div>
    </Navbar>
  )
}

