import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
interface Post {
    id: number;
    title: string;
    body: string;
}

const SecondPage = () => {
    const { users } = useSelector((state) => state)

    const navigate = useNavigate();

    useEffect(() => {
        if (users.value === false) {
            alert("kindly loggedin")
            navigate("/")
        }
    }, [])
    return (
        <div>
            <h1>Second Page</h1>

        </div>
    );
};

export default SecondPage;
