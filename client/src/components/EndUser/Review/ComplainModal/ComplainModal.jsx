import React, {useState} from 'react';
import { Modal, useMantineTheme } from '@mantine/core';
import axios from "axios";
import { baseURL } from '../../../../api'; 
import { useParams } from 'react-router-dom';
import './ComplainModal.scss'

function ComplainModal({ modalOpen, setModalOpen}) {
    const theme = useMantineTheme();
    const [complaints, setComplaint] = useState("");
    const id = useParams();
    console.log(complaints);

    //Post Review
    const postComplain = () => {
        axios.post(`${baseURL}/api/v1/restaurant/complain/${id.id}`, { complain: complaints}, { withCredentials: true })
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
                <h3>Write Your Complaint</h3>
                <div className='review-form'>
                    <label>Complaint: </label>
                    <textarea type="text" required onChange={(event)=>setComplaint(event.target.value)}>
                    </textarea>
                </div>

                <button className='submit-complain' type='submit' onClick={postComplain}>Submit Complain</button>
            </form>
        </Modal>

        </>
    );
}

export default ComplainModal