import React, { useEffect } from "react";
import { useContext } from "react";
import UserContext from "../context/User/UserCotext";


const UserList = () => {

    const { users, getUsers, getProfile} = useContext(UserContext)

    useEffect(() => { // Se va a ejecutar la funtion getUser apenas carge Userlist para eso importamos el usecontext
            getUsers();
    }, [])

    return (
        <div className="list-group h-100 bg-dark">
            {
                users.map(user => (
                    <a className="list-group-item list-group-item-action d-flex flex-row justify-content-start" href="#!" key={user.id} onClick={() => getProfile(user.id)}>
                            <img src="{user.avatar}" className="img-fluid me-4 rounded-circle" width={70} />
                            <p>
                                {`${user.first_name} ${user.last_name}`}
                            </p> 
                    </a>
                ))
            }
        </div>

    )
}

export default UserList