import React from "react";
import {Link} from "react-router-dom";

class Contact extends React.Component {
    onSubmit = () => {
        this.props.history.push("/");
    };

    render() {
        return (
            <form>
                <input placeholder="nam1111e" type="name" />
                <input placeholder="name" type="email" />
                <button onClick={this.onSubmit}>Submit</button>
                <Link to="/Home">Register new user</Link>
            </form>

        );
    }
}

export default Contact;
