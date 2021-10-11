import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import img2 from "../../img/icons8-disney-movies-192.png"


export default class Contact extends Component {
    render() {
        return (
            <>
            <div className="content-contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 about">
                            <h2>Funny?</h2>
                            <h2>Dramatic?</h2>
                            <h2>Or Just romantic ?</h2>
                            <p>Here You Go , <span>You Must Feel Free Now !</span></p>
                        </div>
                        <div className="col-md-6 transformX">
                        <img src={img2} className='w-40 float-right' alt="" />
                        </div>
                    </div>
                </div>
            </div>
                <table className="table">
                    <tbody>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <h5>Watch <span className="span">TV</span></h5>
                                    <p>Movies move us like nothing else can, whether they're scary, funny, dramatic, 
                                    <br />
                                    <br />
                                    romantic or anywhere in-between. So many titles, so much to experience.</p>
                                </div>
                                <div className="col-md-4">
                                    <ul className="table_Links">
                                    <h6>INFORMATION</h6>
                                        <li><NavLink className="ancor-footer" to="/">About Us</NavLink></li>
                                        <li><NavLink className="ancor-footer" to="/">Privacy Policy</NavLink></li>
                                        <li><NavLink className="ancor-footer" to="/">Terms  Conditions</NavLink></li>
                                        <li><NavLink className="ancor-footer" to="/">Contact Us</NavLink></li>
                                        <li><NavLink className="ancor-footer" to="/">Site Map</NavLink></li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <ul className="table_Links">
                                    <h6>CONTACT US</h6>
                                        <li><NavLink className="ancor-footer" to="/">company@gmail.com</NavLink></li>
                                        <li><NavLink className="ancor-footer" to="/">617-280-2973</NavLink></li>
                                        <br />
                                        <br />
                                        <li><NavLink className="ancor-footer" to="/">SitegyTech | Mostafa Osama</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </tbody>
                </table>
            </>
        )
    }
}