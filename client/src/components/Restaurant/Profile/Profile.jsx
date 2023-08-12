import React, { useState, useEffect } from 'react';
import Navbar from '../layout/Navbar/Navbar';
import Sidebar from '../layout/Sidebar/Sidebar';
import './Profile.scss';
import DP from "../../../img/M1syl.jpeg";
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import "../Home/Table/Table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from 'axios';
import UpdateProfile from './UpdateProfile';
import { baseURL } from '../../../api.js';

function Profile() {
  const [file, setFile] = useState("");
  const [datas, setData] = useState(null); 
  const [updateUI, setUpdateUI] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    axios.get(`${baseURL}/api/v1/restaurant/details`, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setData(res.data.details);
      });
  }, [updateUI]);

  if (datas === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile">
      <Sidebar />
      <div className="profileContainer">
        <Navbar />
        <div className="top">
          <h1>Your profile</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : DP} alt="" />
            <div>
              <label htmlFor='file'>
                Image: <DriveFolderUploadOutlinedIcon className='icon' />
              </label>
              <input type="file" id="file" onChange={e => setFile(e.target.files[0])} style={{ display: "none" }} />
            </div>
          </div>
          <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="tableCell">Username</TableCell>
                  <TableCell className="tableCell">Your Restaurant</TableCell>
                  <TableCell className="tableCell">Description</TableCell>
                  <TableCell className="tableCell">Seat Capacity</TableCell>
                  <TableCell className="tableCell">Average Order Value</TableCell>
                  <TableCell className="tableCell">Category</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Array.isArray(datas) ? (
                  datas.map((data) => (
                    <TableRow key={data.id} setUpdateUI={setUpdateUI}>
                      <TableCell className="tableCell">{data.username}</TableCell>
                      <TableCell className="tableCell">{data.name}</TableCell>
                      <TableCell className="tableCell">{data.description}</TableCell>
                      <TableCell className="tableCell">{data.capacity}</TableCell>
                      <TableCell className="tableCell">{data.averageOrderValue}</TableCell>
                      <TableCell className="tableCell">{data.category}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6}>No data available</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
            <button onClick={() => setModal(true)}>Update Profile</button>
            <UpdateProfile
            modal={modal}
            setModal={setModal}
            restaurantId={datas[0]._id} // Make sure this is correct
            onUpdate={(updatedData) => {
              setData((prevData) => {
                const newData = [...prevData];
                newData[0] = { ...newData[0], ...updatedData };
                return newData;
              });
              setModal(false);
            }}
          />
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default Profile;
