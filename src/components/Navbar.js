import React from 'react';


export default function Navbar(props) {
 
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="TextCaseSpeake">{props.name}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="about">{props.about}</a>
        </li>
       
      </ul> 
 

      <div className={`form-check form-switch text-${props.mode==="light"?"dark" : "light"}`}>
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick = {props.ToggleMode} />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" onClick = {props.ToggleMode}>{props.label}</label>
</div>
    </div>
  </div>
</nav>

    </div>
  )
}
