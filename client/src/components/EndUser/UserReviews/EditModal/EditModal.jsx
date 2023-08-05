import React from 'react'
import { Modal, useMantineTheme } from '@mantine/core';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
// import axios from "axios";
// import { baseURL } from '../../../../api'; 
// import { useParams } from 'react-router-dom';

const EditModal = ({ modalOpen, setModalOpen}) => {
    const theme = useMantineTheme();
    // const [comments, setComment] = useState("");
    // const [ratings, setRating] = useState(1);
    // const id = useParams();

  return (
    <>
        <Modal
            opened={modalOpen}
            onClose={() => setModalOpen(false)}
            overlayProps={{
                color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
                opacity: 0.10,
                blur: 0.5,
            }}
        >
            {/* Modal content */}
            <form >
                <div className='review-form'>
                    <label>Comment: </label>
                    <textarea type="text" required >
                        Edit Your Review
                    </textarea>

                    <label>Rating out of 10: </label>
                    <input
                        type="number"
                        min="1"
                        max="10"
                        required
                        // onChange={(e)=>setRating(e.target.value)}
                    />
                    <label>Upload a picture: <DriveFolderUploadOutlinedIcon className='icon' /></label>
                    <input
                        type="file"
                    />
                </div>

                <button className='submit-review' type='submit' onClick={() => setModalOpen(true)}>Confirm Edit</button>
            </form>
        </Modal>

        </>
  )
}

export default EditModal