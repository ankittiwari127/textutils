import React from 'react'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
  <a className="navbar-brand" href="/">{props.title}</a>
  
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/">{props.about}</a>
      </li>
      
    </ul>
    <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglemode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
</div>

  </div>
  

</nav>

  )
}
