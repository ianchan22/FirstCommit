import React, { useState, useEffect } from 'react';
import axios from 'axios';

import LoadPageIndicator from './iLoadPageIndicator'

const BodyHeader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('https://insta.nextacademy.com/api/v1/users')
            .then(result => {
                console.log(result.data)
                setUsers(result.data)
                setIsLoading(false)
            })
            .catch(error => {
                document.write(error)
            })
    }, [])
    if (isLoading) {
        return <LoadPageIndicator/>                                             // no variable passing
        // return <LoadPageIndicator width="200px" height="200px" color="green"/>     // with variable passing
    }
    return (
        <ul>
            {users.map(user => (
                <li>
                    <h2>User ID   : {user.id}</h2>
                    <h2>User Name : {user.username}</h2>
                    <img src={user.profileImage} width="250px" height="250" alt="My awesome image" placeholderColor="#0083FE" />

                </li>
            ))}
        </ul>
    );
}
export default BodyHeader