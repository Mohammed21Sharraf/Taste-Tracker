
import React, { useState } from 'react'
import Navbar from '../layout/Navbar/Navbar'
import Sidebar from '../layout/Sidebar/Sidebar'
import './Profile.scss';
import DP from "../../../img/M1syl.jpeg";
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

const Profile = () => {

    const [file, setFile] = useState("");

    return (
        <div className="profile">
            <Sidebar/>
            <div className="profileContainer">
                <Navbar/>
                <div className="top">
                    <h1>Your profile</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={file ? URL.createObjectURL(file) : DP } alt="" />
                    </div>
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label htmlFor='file'>
                                    Image: <DriveFolderUploadOutlinedIcon className='icon'/>
                                </label>
                                <input type="file" id="file" onChange={e => setFile(e.target.files[0]) } style={{display: "none"}} />
                            </div>
                            <div className="formInput">
                                <label>Username</label>
                                <input type="text" placeholder='Tahsin' />
                            </div>
                            <div className="formInput">
                                <label>Email</label>
                                <input type="text" placeholder='Tahsin@gmail.com' />
                            </div>
                            <div className="formInput">
                                <label>Password</label>
                                <input type="text"/>
                            </div>
                            <div className="formInput">
                                <label>Restaurant</label>
                                <input type="text" placeholder="Tahsin's Kitchen" />
                            </div>
                            <div className="formInput">
                                <label>Average Order Value</label>
                                <input type="text" placeholder='1500 taka' />
                            </div>
                            <button> Update Profile </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile