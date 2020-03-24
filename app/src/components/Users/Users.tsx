import * as React from "react";
import { UserType } from "../../typings/typings";
import User from "../User/User";

export const Users: React.FC = () => {
    let [users, getUsers] = React.useState<UserType[]>([]);

    const fetchUsers = async () => {
        const res = await fetch("https://reqres.in/api/users");
        res.json()
            .then(res => getUsers(res.data))
            .catch(err => console.log(err))
    }
    React.useEffect(() => {
        fetchUsers()
    }, [])
    return (
        <div className="users">
            {users.map((user: UserType) =>
                <User key={user.id} id={user.id} avatar={user.avatar} email={user.email} first_name={user.first_name} last_name={user.last_name}/>
            )}
        </div>
    )
}
