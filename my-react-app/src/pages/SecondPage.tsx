/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Dropdown from '../components/Dropdown';
import './Table.css'; // Ensure Table.css has appropriate styles for centering
import data from '../Json';

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
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
const SecondPage = () => {
    const [arr, setArr] = useState<Post[]>([]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const users = useSelector((state: any) => state.users);
    const navigate = useNavigate();

    const getUser = async () => {
        try {
            const userData = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setArr(userData.data);
            console.log(userData.data);
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
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 5,
                                },
                            },
                        }}
                        pageSizeOptions={[5]}
                        // checkboxSelection
                        disableRowSelectionOnClick
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
