import React from 'react'
import './RankTable.scss'
import { DataGrid } from '@mui/x-data-grid';

const RankTable = () => {

  const columns = [
    { field: 'id', headerName: 'Rank', width: 300 },
    { field: 'restaurantName', headerName: 'Restaurant name', width: 500 },
    { field: 'rating', headerName: 'Rating', width: 300 },
    
  ];
  

  const rows = [
    {
      id: 1,
      restaurantName: "Madchef",
      rating: 239
    },
    {
      id: 2,
      restaurantName: "Madchef",
      rating: 239
    },
    {
      id: 3,
      restaurantName: "Madchef",
      rating: 239
    },
  ]

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
    />
  </div>
  )
}

export default RankTable