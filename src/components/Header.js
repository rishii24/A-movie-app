import React from 'react'
import './Style/Header.css'
import HeaderImg from './Images/Header.png'

import {
  Link
} from "react-router-dom";


export default function Header(props) {
  return (
    <div className="navbar">
      <div>
        <ul className="navbarItems">
          <img className="headerImg" src={HeaderImg} alt="." />
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/" >Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}