import React from "react" 
import { Navbar } from "../styles/Navbar"

export default function Sidebar() {
  return (
    <Navbar>
      <div className="logo" style={{padding: "0.1rem 0.5rem"}}>Logo here</div>
      <div className="nav-buttons" style={{padding: "30vh 0"}}>
        <p>1</p>
        <p>2</p>
        <span>3</span>
        <span>4</span>
      </div>
      <div>
        <p>Github</p>
        <p>LinkedIn</p>
      </div>
    </Navbar>
  )
}

