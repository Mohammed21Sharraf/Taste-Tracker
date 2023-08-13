import React, { useEffect, useState } from 'react'
import './ComplainTable.scss'
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";
import { baseURL } from '../../../../api';
import { useParams } from 'react-router-dom';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

const ComplainTable = () => {

    const [complaintsData, setComplaintData] = useState([]);
    // const [complainID, setComplainID] = useState("");
    const [updateUI, setUpdateUI] = useState(false);
    const id = useParams();
    // console.log(id.id);

    useEffect(() => {
        axios
            .get(`${baseURL}/api/v1/restaurant/all-complains/${id.id}`, {
                withCredentials: true,
            })
            .then((res) => {
                setComplaintData(res.data);
                console.log(res.data);
                // setUpdateUI((prevState)=>!prevState)
            });
    }, [updateUI, id]);

    const deleteComplain = (ID)=> {
        console.log(ID);
        axios.delete(`${baseURL}/api/v1/restaurant/delete-complain/${id.id}`,{data: {complainID: ID}}, {
            withCredentials: true,
        })
        .then((res) => {
            console.log(res.data);
        })
    }

    // console.log({ complaintsData });

    const columns = [
        { field: 'id', headerName: 'Complain Id', width: 200 },
        { field: 'userName', headerName: 'Complainer name', width: 200 },
        { field: 'complaint', headerName: 'Complaint', width: 500 },
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className='delete-icon'>
                        <DeleteRoundedIcon onClick={deleteComplain(params.row.id)} />
                    </div>
                );
            },
        },
    ];

    const rows = []
    complaintsData.forEach((comp) => {
        rows.push({
            id: comp._id,
            userName: comp.name,
            complaint: comp.complains,
        })
    })

    return (
        <div className="table">

            <h1 className='rank'>Customer Complaints</h1>
            <DataGrid
                className='datagrid'
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSize={10}
                autoHeight
                disableSelectionOnClick
                setUpdateUI={setUpdateUI}
            />
        </div>
    )
}

export default ComplainTable