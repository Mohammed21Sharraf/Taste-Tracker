import { Modal, useMantineTheme } from '@mantine/core';
import './UpdateProfile.scss'

function UpdateProfile({ modal, setModal }) {
    const theme = useMantineTheme();

    return (
        <>
            <Modal
                opened={modal}
                onClose={() => setModal(false)}
                overlayColor={
                    theme.colorScheme === "dark"
                        ? theme.colors.dark[9]
                        : theme.colors.gray[2]
                }
                overlayOpacity={0.55}
                overlayBlur={3}
                size="55%"
            >
                <form className='infoForm'>
                    <h3>Your Profile</h3>
                    <div>
                        <input
                            type="text"
                            className="infoInput"
                            name="username"
                            placeholder="User Name"
                        />

                        <input
                            type="text"
                            className="infoInput"
                            name="name"
                            placeholder="Restaurant Name"
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            className="infoInput"
                            name="description"
                            placeholder="Description"
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            className="infoInput"
                            name="capacity"
                            placeholder="Seat Capacity"
                        />

                        <input
                            type="text"
                            className="infoInput"
                            name="aov"
                            placeholder="Average Order Value"
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            className="category"
                            placeholder="Category"
                        />
                    </div>
                    <button>Update</button>
                </form>
            </Modal>

        </>
    );
}

export default UpdateProfile;