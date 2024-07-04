import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Dropdown from '../components/Dropdown';
import './Table.css'; // Ensure Table.css has appropriate styles for centering
import data from '../Json';
import { red } from '@mui/material/colors';

const columns: GridColDef[] = [
    { field: 'userId', headerName: 'User ID', width: 90 },
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'title',
        headerName: 'Title',
        width: 500,
        editable: true,
    },
];

const SecondPage = () => {
    const [arr, setArr] = React.useState([]);
    const users = useSelector((state) => state.users);
    const navigate = useNavigate();

    const getUser = async () => {
        try {
            const userData = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setArr(userData.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        if (!users.value) {
            alert('Please fill the data');
            navigate('/');
        } else {
            getUser();
        }
    }, [users.value, navigate]);

    return (
        <div className="second-page-container">
            <div className="table-container">
                <Box sx={{ display: 'flex', justifyContent: 'center', height: 400, width: '100%' }}>
                    <DataGrid
                        rows={arr}
                        columns={columns}
                        pagination
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        disableSelectionOnClick
                    />
                </Box>
            </div>
            <div className="dropdown-container">
                <Dropdown data={data} />
            </div>
        </div>
    );
};

export default SecondPage;
