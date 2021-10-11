import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import img1 from "../../img/icons8-disney-movies-48.png"


export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
                    <NavLink className="navbar-brand" to="/home">Watch <span className="span">TV</span></NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/movies">Movies</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Tv">Tv</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Register">Register</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Login">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/"> 
                                <input class="form-control search" type="search" placeholder="search.. " />
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    <img src={img1} alt="" />
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}
