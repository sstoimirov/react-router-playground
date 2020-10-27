import React from "react";
import { UserInfoType } from "../../typings/typings";

export const UserInfo: React.FC<UserInfoType> = ({ last_name, userId, email }) => {
    return (
        <div className="user-info" key={`${userId}__${last_name}`}>
            <div className="user-last-name">Last Name: {last_name}</div>
            <div className="user-email">Email: {email}</div>

        </div>
    )
}