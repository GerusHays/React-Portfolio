import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div className="aside">
        <div className="logo">
          <Link to='/'><span>G</span>uide</Link>
        </div>
        <div className="nav-toggler">
          <span />
        </div>
        <ul className="nav">
          <Link to='/'><li className="active"><i className="fa fa-home" />Home</li></Link>
          <Link to='/about'><li><i className="fa fa-user" />About</li></Link>
          <Link to='services'><li><i className="fa fa-list" />Services</li></Link>
          <Link to='/portfolio'><li><i className="fa fa-briefcase" />Portfolio</li></Link>
          <Link to='/contact'><li><i className="fa fa-comments" />Contact</li></Link>
        </ul>
      </div>
    );
  }

export default Navigation