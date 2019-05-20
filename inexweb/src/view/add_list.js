import React from 'react';
import '../App.css';
import Select from "react-dropdown-select";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header_all_page from "./header_all_page";

import {
    Route,
    NavLink,
    BrowserRouter as Router,Link,
    Switch,button
} from "react-router-dom";
import Contact from "../Contact";

const list_type = [
    { label: "income", value: 1 },
    { label: "expense", value: 2 },
];


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

class add_list extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date()
        };
        this.handleChangedate = this.handleChangedate.bind(this);

        this.state = {
            description: null,
            amount: null,
            date: null,
            formErrors: {
                description: "",
                amount: "",
                date: "",
            }
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        if (formValid(this.state)) {
                console.log(`
                    --SUBMITTING--
                    description: ${this.state.description}
                    amount: ${this.state.amount}
                    date: ${this.state.startDate}
                  `);

        } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }

    };

    handleChangedate(date_real) {
        this.setState({
            startDate: date_real
        });
        this.setState({  date: date_real }, () => console.log(this.state));
    }

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
                <Header_all_page />
                <div >
                    <h1  > Add  Income and Expense</h1>
                    <div>
                        <form onSubmit={this.handleSubmit} noValidate className="from_login">
                            <div className="select_list_inex" >
                                <Select options={list_type} className="select_list_inex"  />
                            </div>
                            <div className="user">
                                <input  className="input_box_add_list" placeholder="Description"  onChange={this.handleChange} name="description" type="text" required />
                            </div>
                            <div className="password">
                                <input  className="input_box_add_list" placeholder="Amount"  onChange={this.handleChange} name="amount"  type="text" required  />
                            </div>
                            {/*<div className="password">*/}
                                {/*<input  className="input_box_add_list" placeholder="Date"  onChange={this.handleChange} name="password"  type="password" required  />*/}
                            {/*</div>*/}
                            <div className="password">
                                <DatePicker className="select_list_inex"
                                            placeholderText="select data"
                                            selected={this.state.startDate}
                                            onChange={this.handleChangedate} name="date"/>
                            </div>
                            <div className="createAccount">
                                <button type="submit" >Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default add_list;