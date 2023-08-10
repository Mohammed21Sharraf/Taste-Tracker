import React, {useState} from 'react';
import { Modal, useMantineTheme } from '@mantine/core';
// import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import axios from "axios";
import { baseURL } from '../../../../api'; 
import { useParams } from 'react-router-dom';

function ReviewModal({ modalOpen, setModalOpen}) {
    const theme = useMantineTheme();
    const [comments, setComment] = useState("");
    const [ratings, setRating] = useState(1);
    const id = useParams();
    console.log(comments);
    console.log(ratings);

    //Post Review
    const postReview = () => {
        axios.post(`${baseURL}/api/v1/reviews/${id.id}`, { comments: comments, ratings: ratings }, { withCredentials: true })
            .then((res) => {
                console.log(res.data);
            })
    }
        

    return (

        <>
        <Modal
            opened={modalOpen}
            onClose={() => setModalOpen(false)}
            overlayProps={{
                color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
                opacity: 0.55,
                blur: 3,
            }}
        >
            {/* Modal content */}
            <form >
                <h3>Write Your Review</h3>
                <div className='review-form'>
                    <label>Comment: </label>
                    <textarea type="text" required onChange={(event)=>setComment(event.target.value)}>
                        Share your thoughts
                    </textarea>

                    <label>Rating out of 10: </label>
                    <input
                        type="number"
                        min="1"
                        max="10"
                        required
                        onChange={(e)=>setRating(e.target.value)}
                    />
                    {/* <label>Upload a picture: </label>
                    <input
                        type="file"
                    /> */}
                </div>

                <button className='submit-review' type='submit' onClick={postReview}>Submit</button>
            </form>
        </Modal>

        </>
    );
}

export default ReviewModal