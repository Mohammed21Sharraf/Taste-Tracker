import React from 'react'
import Sidebar from "../layout/Sidebar/Sidebar";
import Navbar from "../layout/Navbar/Navbar.jsx";
import "./Ranking.scss";
import Table from './RankingTable/RankTable';

const Ranking = () => {
  return (
    <div className="home">
        <Sidebar/>
        <div className="homeContainer">
            <Navbar/>
            <Table/>
        </div>
    </div>
  )
}

export default Ranking