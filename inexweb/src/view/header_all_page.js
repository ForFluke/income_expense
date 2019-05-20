import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
// import logo from '../assets/image/logo.png';
// if( (localStorage.getItem('user') == '' || localStorage.getItem('user') == null )){
//     window.location.assign("/login");
// }


class header_all_page extends React.Component {
    onSubmit = () => {
        this.props.history.push("/");
    };
    logout = e => {
        localStorage.clear();
        window.location.assign("/login");
    };
    render() {
        return (
            <div >
                <div className="logout_bt" >
                    <div className="logout_bt_text_left" >
                        {/*<NavLink className="logout_bt_text"*/}
                                 {/*activeClassName="active"  to="./list_income_expense" >*/}
                            {/*Back*/}
                        {/*</NavLink>*/}
                    </div>
                    <div className="logout_bt_text_right" >
                        <NavLink className="logout_bt_text" activeClassName="active"
                                 onClick={this.logout} >
                            Logout
                        </NavLink>
                    </div>

                </div>
                <div className="title_name">
                   Income and Expense Recording
                </div>
            </div>

        );
    }
}
export default header_all_page;