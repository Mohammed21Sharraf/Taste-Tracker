import React, { useState } from 'react';
import { Modal, useMantineTheme } from '@mantine/core';
import axios from 'axios';
import { baseURL } from '../../../api.js';
import './UpdateProfile.scss';

function UpdateProfile({ modal, setModal, restaurantId, onUpdate, initialData }) {
  const theme = useMantineTheme();
  const [formData, setFormData] = useState({ ...initialData });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `${baseURL}/api/v1/restaurant/update/${restaurantId}`,
        formData,
        { withCredentials: true }
      );

      onUpdate(response.data);

      setModal(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <Modal
        opened={modal}
        onClose={() => setModal(false)}
        overlayColor={
          theme.colorScheme === 'dark'
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}
        size="55%"
      >
        <form className="infoForm" onSubmit={handleSubmit}>
          <h3>Your Profile</h3>
          <div>
            <label htmlFor="username">User Name:</label>
            <input
              type="text"
              className="infoInput"
              id="username"
              name="username"
              placeholder="User Name"
              value={formData.username}
              onChange={handleInputChange}
            />

            <label htmlFor="name">Restaurant Name:</label>
            <input
              type="text"
              className="infoInput"
              id="name"
              name="name"
              placeholder="Restaurant Name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              className="infoInput"
              id="description"
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="capacity">Seat Capacity:</label>
            <input
              type="text"
              className="infoInput"
              id="capacity"
              name="capacity"
              placeholder="Seat Capacity"
              value={formData.capacity}
              onChange={handleInputChange}
            />

            <label htmlFor="aov">Average Order Value:</label>
            <input
              type="text"
              className="infoInput"
              id="averageOrderValue"
              name="averageOrderValue"
              placeholder="Average Order Value"
              value={formData.averageOrderValue}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              className="infoInput"
              id="category"
              name="category"
              placeholder="Category"
              value={formData.category}
              onChange={handleInputChange}
            />
          </div>

          <button type="submit">Update</button>
        </form>
      </Modal>
    </>
  );
}

export default UpdateProfile;
