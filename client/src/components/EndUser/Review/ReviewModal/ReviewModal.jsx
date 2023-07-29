import { Modal, useMantineTheme } from '@mantine/core';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

function ReviewModal({ modalOpen, setModalOpen }) {
    const theme = useMantineTheme();

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
                        <textarea>
                            Share your thoughts
                        </textarea>

                        <label>Rating out of 10: </label>
                        <input
                            type="number"
                            min="1" 
                            max="10"
                            required
                        />
                        <label>Upload a picture: <DriveFolderUploadOutlinedIcon className='icon' /></label>
                        <input
                            type="file"
                        />
                    </div>

                    <button className='submit-review'>Submit</button>
                </form>
            </Modal>

        </>
    );
}

export default ReviewModal