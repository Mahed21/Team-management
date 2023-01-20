import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Home = () => {

    const [users, setUsers] = useState('')

    useEffect(() => {
        fetch('http://localhost:5000/users', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }, [])

    return (
        <div>
            <h1>Home</h1>
            <br />
            <br />
            <h3>Team Management</h3>
        </div>
    );
};

export default Home;