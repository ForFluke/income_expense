import React from 'react';
import '../App.css';
import {
    Route,
    NavLink,
    BrowserRouter as Router,Link,
    Switch,button
} from "react-router-dom";
import Contact from "../Contact";


const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);


const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    // validate the form was filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });

    return valid;
};

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
            password: null,
            email: null,
            confirm_password: null,
            formErrors: {
                user: "",
                email: "",
                confirm_password: "",
                password: ""
            }
        };
    }

    handleSubmit = e => {
        e.preventDefault();
            if (formValid(this.state)) {
                if(this.state.confirm_password == this.state.password) {
                        console.log(`
                    --SUBMITTING--
                    user: ${this.state.user}
                    email: ${this.state.email}
                    confirm_password: ${this.state.confirm_password}
                    Password: ${this.state.password}
                  `);
                }else{
                    console.error("Password Failed");
                }
            } else {
                console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
            }

    };
    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };

    render() {
        const { formErrors } = this.state;
        return (
            <div className="form-wrapper_register">
                <div >
                    <h1  > Register</h1>
                    <div>
                        <form onSubmit={this.handleSubmit} noValidate className="from_login">
                            <div className="user">
                                <input  className="input_box" placeholder="User Name"  onChange={this.handleChange} name="user" type="text" required />
                            </div>
                            <div className="password">
                                <input  className="input_box" placeholder="E-mail"  onChange={this.handleChange} name="email"  type="text" required  />
                            </div>
                            <div className="password">
                                <input  className="input_box" placeholder="Password"  onChange={this.handleChange} name="password"  type="password" required  />
                            </div>
                            <div className="password">
                                <input  className="input_box" placeholder="confirm password "  onChange={this.handleChange} name="confirm_password"  type="password" required  />
                            </div>
                            <div className="createAccount">
                                <button type="submit" >Register New</button>
                            </div>
                            <div className="password">
                                <NavLink className="input_box" activeClassName="active"  to="./login">
                                    Login
                                </NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;