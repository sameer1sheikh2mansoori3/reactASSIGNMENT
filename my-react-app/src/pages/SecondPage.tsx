import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { UseDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Dropdown from '../components/Dropdown';

const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: 'userId', headerName: 'userId', width: 90 },
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'title',
        headerName: 'title',
        width: 500,
        editable: true,
    },

];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function SecondPage() {
    const [arr, setArr] = React.useState([]);
    let users = useSelector((state) => state);
    const getUser = async () => {
        const userData = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        setArr(userData.data)

    }
    if (users.value === false) {
        const navigate = useNavigate();
        navigate("/")
        alert("fill the data")

    }


    useEffect(() => {
        getUser()
    }, [])

    return (

        <>

            <div className={{ width: '100%', marginX: 'auto' }}>
                <Box sx={{ height: 400, width: '90%', marginX: 'auto' }}>
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

                        disableRowSelectionOnClick
                    />
                </Box>
            </div>
            <div>
                <Dropdown />
            </div></>
    );
}
