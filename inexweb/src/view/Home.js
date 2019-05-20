import React from "react";
import {Link} from "react-router-dom";
console.log(localStorage.getItem('user'));
// localStorage.clear();

class Home extends React.Component {
    onSubmit = () => {
        this.props.history.push("/");
    };

    render() {
        return (
            <div>
                <div >
                    <h1>select menu</h1>
                </div>
            </div>

        );
    }
}

export default Home;
