import React, {useEffect, useState} from 'react'
import './RankTable.scss'
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";
import { baseURL } from '../../../../api';
// import { useParams } from 'react-router-dom';

const RankTable = () => {

  const [rankData, setRankData] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);

  useEffect(() => {
    axios
      .get(`${baseURL}/api/v1/restaurants/rankings`, {
        withCredentials: true,
      })
      .then((res) => {
        setRankData(res.data.restaurants);
        console.log(res.data);
        // setUpdateUI((prevState)=>!prevState)
      });
  }, [updateUI]);

  const columns = [
    { field: 'id', headerName: 'Rank', width: 200 },
    { field: 'restaurantName', headerName: 'Restaurant name', width: 400 },
    { field: 'rating', headerName: 'Rating', width: 200 },
    { field: 'point', headerName: 'Point', width: 200 },

  ];


  const rows = []
  rankData.forEach((rank)=>{
    console.log(rank);
    rows.push({
      id: rank._id,
      restaurantName: rank.name,
      rating: rank.ratings,
      point: rank.points
    })
  })

  return (
    <div className="table">

      <h1 className='rank'>Ranking for this month</h1>
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

export default RankTable