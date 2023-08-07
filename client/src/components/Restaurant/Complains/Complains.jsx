import React from 'react'
import Sidebar from "../layout/Sidebar/Sidebar";
import Navbar from "../layout/Navbar/Navbar.jsx";
import ComplainTable from "./ComplainTable/ComplainTable"
import "./Complains.scss";


const Ranking = () => {
  return (
    <div className="home">
        <Sidebar/>
        <div className="homeContainer">
            <Navbar/>
            <ComplainTable/>
        </div>
    </div>
  )
}

export default Ranking