import React, {useEffect, useState} from 'react'
import './ReviewTable.scss'
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";
import { baseURL } from '../../../../api';
import { useParams } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

const ReviewTable = () => {

  const [reviewData, setReviewData] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);
  const id = useParams();
  console.log(id);

  useEffect(() => {
    axios
      .get(`${baseURL}/api/v1/review/details/${id.id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setReviewData(res.data.review);
        console.log(res.data);
        setUpdateUI((prevState)=>!prevState)
      });
  }, [updateUI]);

  const columns = [
    { field: 'id', headerName: 'Review ID', width: 200 },
    { field: 'userName', headerName: 'User name', width: 200 },
    { field: 'comment', headerName: 'Comments', width: 500 },
    { field: 'rating', headerName: 'Ratings', width: 200 },

  ];


  const rows = []
  reviewData.forEach((review)=>{
    console.log(review);
    rows.push({
      id: review._id,
      userName: review.userName,
      comment: review.comment,
      rating: review.rating
    })
  })

  return (
    <div className="table">

      <h1 className='rank'>User Reviews</h1>
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

export default ReviewTable