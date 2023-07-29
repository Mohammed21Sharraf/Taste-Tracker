import React, { useState } from 'react'
import "./Reviews.scss"
import "../../../../index.css";

import ReviewModal from '../ReviewModal/ReviewModal';
import { height } from '@mui/system';
// import axios from "axios";
// import { baseURL } from '../../../../api';
// import { useParams } from 'react-router-dom';


const Reviews = () => {

    const [modalOpen, setModalOpen] = useState(false);
    // const [reviewData, setReviewData] = useState([]);

    // useEffect(() => {
    //     axios.get(`${baseURL}/get`)
    //     .then((res)=>{
    //         console.log(res.data);
    //     })
    // }, []);


    return (
        <div className="Reviews">
            <div className='mt-4 -mx-8 px-8 py-8'>
                <h1 className='text-5xl mx-3'>Madchef</h1>
                <div className='my-4 mx-5'>
                    <h2 className='font-semibold text-2xl'>Descriptions</h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <hr
                    style={{
                        background: 'gray',
                        height: '0.5px',
                        margin: '50px',
                        border: '0.8px dotted'
                    }}
                />
                <div className='grid grid-cols-2'>
                    <div className='mx-5'>
                        <h4 className='font-semibold text-xl'>Average Order Value: 200</h4><br/>
                        <h4 className='text-xl font-semibold'>Seat Capacity: 100</h4><br/>
                    </div>
                </div>
                <hr
                    style={{
                        background: 'gray',
                        marginTop: '20px',
                        margin: '50px',
                        border: '0.8px dotted'
                    }}
                />
                <div className='my-4 mx-5'>
                    <h2 className='font-semibold text-2xl'>Category</h2>
                     Ocupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <hr
                    style={{
                        background: 'gray',
                        marginTop: '20px',
                        margin: '50px',
                        border: '0.8px dotted'
                    }}
                />
                <div className='my-4 mx-5'>
                    <h2 className='font-semibold text-2xl'>Reviews</h2>
                     Ocupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div className='bg-white shadow p-6 rounded 2xl w-1/4 mx-5 md:justify-center'>
                Share what you feel about the food!<br/>
                <button className='submit-review' onClick={() => setModalOpen(true)}>Submit Review</button>
                </div>
            </div>
            <div>
                <ReviewModal
                    modalOpen={modalOpen}
                    setModalOpen={setModalOpen}
                />
            </div>
        </div>
    )
}

export default Reviews