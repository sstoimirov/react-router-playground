import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import { UserType } from "../../typings/typings";
import { UserInfo } from "../UserInfo/UserInfo";

export const User: React.FC<UserType> = ({ id, avatar, email, first_name, last_name }) => {
    return (
        <Router className="user" key={id}>
            <div className="user-name">Name: {first_name}</div>
            <Link to={`/users/${id}`}><img src={avatar} alt="User" /></Link>
            <Route path={`/users/${id}`}><UserInfo key={id} userId={id} last_name={last_name} email={email} /></Route>
        </Router>
    )
}