import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Switch
} from "react-router-dom";

import Login from "./view/login";
import App from "./App";
import Contact from "./Contact";
import Home from "./view/Home";
import Register from "./view/Register";
import list_income_expense from "./view/list_income_expense";
import add_list from "./view/add_list";
import Header_all_page from './view/header_all_page';

if( (localStorage.getItem('user') == '' || localStorage.getItem('user') == null )&&  localStorage.getItem('renew') == null ){
        window.location.assign("/login");
        localStorage.setItem('renew','login');
}

const routing = (
    <Router className="wrapper">
        <div  className="wrapper">
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/contact" component={Contact} />
                <Route path="/login" component={Login} />
                <Route path="/Home" component={Home} />
                <Route path="/Register" component={Register} />
                <Route path="/list_income_expense" component={list_income_expense} />
                <Route path="/add_list" component={add_list} />

            </Switch>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
