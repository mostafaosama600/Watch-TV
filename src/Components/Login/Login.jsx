import React, { Component } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export default class Login extends Component {

    state = { errorMessage: "" }
    user = {
        email: "",
        password: ""
    }
    getFormData = (e) => {
        this.user[e.target.name] = e.target.value
        console.log(this.user)
    }
    sendData = async (e) => {
        e.preventDefault()
        // console.log('done')
        let { data } = await axios.post("https://route-egypt-api.herokuapp.com/signin", this.user)
        if (data.message === "success") {
            localStorage.setItem("token", data.token)
            // Home Page
            this.props.history.replace("/home")
            // e.target.rest()
        }
        else {
            this.setState({
                errorMessage: data.message
            })
        }
        console.log(data);
    }
    render() {
        return (
            <>
                <div className='w-75 mx-auto my-5'>
                    <form onSubmit={this.sendData}>
                        <input onChange={this.getFormData} name='email' type="email" placeholder='email' className='form-control mt-3' />
                        <input onChange={this.getFormData} name='password' type="Password" placeholder='Password' className='form-control mt-3' />
                        {this.state.errorMessage}
                        <button type='submit' className='btn btn-info float-left mt-3'>Register</button>
                    </form>
                </div>

                <table className="table">
                    <tbody>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 about">
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
                                        <li className="transformX"><NavLink className="ancor-footer" to="/">SitegyTech | Mostafa Osama</NavLink></li>
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
