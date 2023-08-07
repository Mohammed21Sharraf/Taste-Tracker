import { Modal, useMantineTheme } from "@mantine/core";
import React, { Fragment, useState } from "react";
import "./WishlistModal.scss";
import axios from "axios";
import { baseURL } from "../../../../../api";
import { useNavigate } from "react-router-dom";

const WishlistModal = ({ modalOpen, setModalOpen, id }) => {
  const theme = useMantineTheme();
  const [food, setFood] = useState("");
  const navigate = useNavigate();

  const handleWishlist = () => {
    axios
      .post(
        `${baseURL}/api/v1/addtowishlist/${id}`,
        { preferredFood: food },
        { withCredentials: true }
      )
      .then(() => {
        navigate("/wishlist");
      });
  };
  return (
    <Fragment>
      <Modal
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        overlayProps={{
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[9]
              : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
      >
        <div>
          <h3 style={{ maxWidth: "400px", textAlign: "center" }}>
            Write down preferred food
          </h3>
        </div>
        <div className="preferred-food">
          <textarea
            type="text"
            required
            placeholder="Write your preferred food"
            onChange={(e) => setFood(e.target.value)}
          ></textarea>
        </div>
        <div style={{ paddingLeft: "130px" }}>
          <button
            style={{ backgroundColor: "#4c0f1e" }}
            className="wishlist-modal-button"
            type="submit"
            onClick={handleWishlist}
          >
            Add to Wishlist
          </button>
        </div>
      </Modal>
    </Fragment>
  );
};

export default WishlistModal;
