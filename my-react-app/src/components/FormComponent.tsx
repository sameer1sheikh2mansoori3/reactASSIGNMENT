import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { isLoggedIn } from '../features/users/userSlice';
import { Box, Button, TextField, Alert, Typography, Divider } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AddIcon from '@mui/icons-material/Add';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import './FormBox.css';

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

    const handleSubmit = (e) => {
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
        <Box className="form-container">
            <Box className="form-content">
                <img src="https://images987.s3-us-west-1.amazonaws.com/theme_logo_06-21-2021-60d08dab4fd6e.png" alt="Logo" className="form-logo" />
                <Divider className="form-divider" />
                <Typography variant="h6" sx={{ m: 2 }} className="form-heading">
                    <LoginIcon /> Sign Up Now | No credit card <span className='redText'>required 🏆</span>
                </Typography>
                <Typography sx={{ m: 2 }} variant="subtitle1" className="form-subheading">
                    Register Now for <span className='fontBold'> 14 Days FREE</span> trial of GrowMeOrganic
                </Typography>
                <Typography sx={{ m: 2 }} variant="body2" className="form-warning">
                    We're strictly against ❌ multiple account creation,

                    usage of disposable
                    <br /> emails & fraudulent transactions.

                    Our anti-abuse system
                    <br /> will immediately ban 🚫 your entire company for any of the above.
                </Typography>
                {isAlert && <Alert severity="warning">Please fill in all fields.</Alert>}
                <form onSubmit={handleSubmit} className="FormBox">
                    <Box className="input-field">
                        <AccountCircleIcon />
                        <TextField
                            id="outlined-basic"
                            label="Name"
                            variant="outlined"
                            fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Box>
                    <Box className="input-field">
                        <PhoneIcon />
                        <TextField
                            id="outlined-basic"
                            label="Phone"
                            variant="outlined"
                            fullWidth
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </Box>
                    <Box className="input-field">
                        <EmailIcon />
                        <TextField
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Box>
                    <Typography variant="body2" className="form-terms" sx={{ m: 2 }}>
                        By registering you accept our <span className='redText'>Terms of Service</span>  and our <span className='redText'> Privacy Policy.</span>
                    </Typography>
                    <Button
                        type="submit"
                        variant="contained"
                        className="register-button"
                        sx={{
                            backgroundColor: 'orange',
                            width: '90%',
                            '&:hover': {
                                backgroundColor: '#ff7f00',
                            }
                        }}
                    >
                        <AddIcon /> Register
                    </Button>
                </form>
            </Box>
            <Box className="form-image" />
        </Box>
    );
};

export default FormComponent;
