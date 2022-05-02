import React from "react";
import useUsers from "../../Hook/useUsers";
import SingleUser from "../SingleUser/SingleUser";

const Users = () => {
    const usersData = useUsers('https://jsonplaceholder.typicode.com/users');

    return (
        <div className='container'>
            <div className='row'>
                {
                    usersData?.map(user => <SingleUser 
                    key={user.id}
                    user={user}
                    ></SingleUser>)
                }
            </div>
        </div>
    );
};

export default Users;
