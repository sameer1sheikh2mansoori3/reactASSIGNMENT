import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { isLoggedIn } from '../features/users/userSlice';
import { Box, Button, TextField, Alert } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import './FormBox.css';
const imageSrc = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD0y-sTwhcpp08XGwRRLHZffK1ac0nZItlXw&s`
const FormComponent = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [isAlert, setIsAlert] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isAlert) {
            const timer = setTimeout(() => {
                setIsAlert(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [isAlert]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !phone.trim() || !email.trim()) {
            setIsAlert(true);
            return;
        }
        localStorage.setItem('userDetails', JSON.stringify({ name, phone, email }));
        dispatch(isLoggedIn());
        navigate('/second-page');
    };

    return (
        <Box className="container">
            <Box className="form-container">
                {isAlert && <Alert severity="warning">Please fill in all fields.</Alert>}
                <form onSubmit={handleSubmit} className='FormBox'>
                    <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        id="outlined-basic"
                        label="Phone"
                        variant="outlined"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <Button
                        type='submit'
                        variant='contained'
                        color='warning'
                        startIcon={<AddIcon />}
                        fullWidth
                        sx={{ backgroundColor: 'orange', marginTop: 2 }}
                    >
                        Register
                    </Button>
                </form>
            </Box>
            <Box className="image-container">
                <img src={imageSrc} alt="Decorative" className="full-height-image" />
            </Box>
        </Box>
    );
};

export default FormComponent;
