import React, { Component } from 'react'
import Icon from '../assets/images/icon.png'
import '../utils/navbar.css'
import { Link } from 'react-router-dom'



export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar-main">

      <div className="navbar-image-div">
        <img src={Icon} alt="futurestay logo" width="30.82px" height="34px"/>
      </div>

        <ul>
          <div className="navbar-menu-item">
            <i className="material-icons">assessment</i>
            <Link style={{ textDecoration: 'none' }}><li>Home</li></Link>
          </div>
          <div className="navbar-menu-item">
            <i className="material-icons">hotel</i>
            <Link style={{ textDecoration: 'none' }}><li>Properties</li></Link>
          </div>
          <div className="navbar-menu-item">
            <i className="material-icons">local_offer</i>
            <Link style={{ textDecoration: 'none' }}><li>Rates</li></Link>
          </div>
          <div className="navbar-menu-item">
            <i className="material-icons">autorenew</i>
            <Link style={{ textDecoration: 'none' }}><li>Connections</li></Link>
          </div>
          <div className="navbar-menu-item">
          <i class="far fa-calendar-check fa-lg"></i>
            <Link style={{ textDecoration: 'none' }}><li>Reservations</li></Link>
          </div>
          <div className="navbar-menu-item">
            <i className="material-icons">airplay</i>
            <Link style={{ textDecoration: 'none' }}><li>Web Builder</li></Link>
          </div>
        </ul>

        <div className="navbar-profile-div">
          <h3>Hi, {localStorage.user ? localStorage.user.name : ' Amy!'}</h3>
          <i className="material-icons">settings</i>
        </div>

      </div>
    )
  }
}
