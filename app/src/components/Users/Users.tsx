import * as React from "react";
import { User } from "../../interfaces/interfaces";

export const Users: React.FC = () => {
    let [users, getUsers] = React.useState<User[]>([]);

    const fetchUsers = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        res.json()
            .then(res => getUsers(res))
            .catch(err => console.log(err))
    }
    React.useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div className="users">
            {users.map((user: User) =>
                <div className="user" key={user.id}>
                    <div className="user-id">{user.id}</div>
                    <div className="user-name">{user.name}</div>
                    <div className="user-email">{user.email}</div>
                </div>
            )}
        </div>
    )
}