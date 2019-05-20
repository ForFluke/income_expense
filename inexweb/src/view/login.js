import React from 'react';
import '../App.css';
import {
    Route,
    NavLink,
    BrowserRouter as Router,Link,
    Switch,button
} from "react-router-dom";

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

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
            password: null,
            formErrors: {
                user: "",
                password: ""
            }
        };
    }


    handleSubmit = e => {
        e.preventDefault();

        if (formValid(this.state)) {
            console.log(`
        --SUBMITTING--
        user: ${this.state.user}
        Password: ${this.state.password}
      `);

            if(this.state.user == 'admin' && this.state.password == 'admin'){
                window.location.assign("/list_income_expense")
                localStorage.setItem('user', this.state.user);

            }else{
                console.error("รหัสผิด");
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
            <div className="form-wrapper">
                <div >
                    <h1  > LOGIN</h1>
                    <div>
                        <form onSubmit={this.handleSubmit} noValidate className="from_login">
                            <div className="user">
                                <input  className="input_box" placeholder="User Name"  onChange={this.handleChange} name="user" type="text" required />
                            </div>
                            <div className="password">
                                <input  className="input_box" placeholder="Password"  onChange={this.handleChange} name="password"  type="password" required  />
                            </div>
                            <div className="createAccount">
                                <button type="submit" >Login</button>
                            </div>
                            <div className="password">
                                <NavLink className="input_box" activeClassName="active"  to="./Register">
                                    Register new user
                                </NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;