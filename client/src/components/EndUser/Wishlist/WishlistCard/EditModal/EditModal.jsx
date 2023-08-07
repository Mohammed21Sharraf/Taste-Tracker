import { Modal, useMantineTheme } from "@mantine/core";
import React, { Fragment, useState } from "react";
import "./EditModal.scss";

const EditModal = ({ modalOpen, setModalOpen, onUpdate, id }) => {
  const theme = useMantineTheme();
  const [food, setFood] = useState("");

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
            Update your Preferred Food
          </h3>
        </div>
        <div className="edit-preferred-food">
          <textarea
            type="text"
            required
            placeholder="Write your preferred food"
            onChange={(e) => setFood(e.target.value)}
          ></textarea>
        </div>
        <div style={{ paddingLeft: "170px" }}>
          <button
            style={{ backgroundColor: "#4c0f1e" }}
            className="edit-modal-button"
            type="submit"
            onClick={() => onUpdate(id, food)}
          >
            Edit
          </button>
        </div>
      </Modal>
    </Fragment>
  );
};

export default EditModal;
