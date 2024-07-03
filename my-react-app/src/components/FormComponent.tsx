import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormComponent = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const history = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        localStorage.setItem('userDetails', JSON.stringify({ name, phone, email }));
        history('/second-page');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label>
                Phone:
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </label>
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default FormComponent;
