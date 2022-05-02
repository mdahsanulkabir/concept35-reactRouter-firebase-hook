import React from 'react';
import { useParams } from 'react-router-dom';
import useUsers from '../../Hook/useUsers';
import SingleUser from '../SingleUser/SingleUser';

const UserInfo = () => {
    const {userId} = useParams();
    const user = useUsers(`https://jsonplaceholder.typicode.com/users/${userId}`);
    console.log(user);
    return (
        <div className='container'>
            <h1>{userId}</h1>
            <SingleUser user={user}>
                {
                    {email:user?.email, phone:user?.phone}
                }
            </SingleUser>
        </div>
    );
};

export default UserInfo;