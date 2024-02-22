import { useState } from "react";
import DeleteIcon from "../assets/trash.svg?react";
import DeleteModal from "./DeleteModal";

const DeleteCommentButton = ({ deleteComment }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="bg-red-700 px-1 py-1 text-white rounded-md cursor-pointer self-start"
        onClick={() => setShowModal(true)}
      >
        <DeleteIcon />
      </button>
      {showModal && (
        <DeleteModal
          message="Are you sure you want to delete this comment?"
          onConfirm={() => {
            deleteComment();
            setShowModal(false);
          }}
          closeModal={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default DeleteCommentButton;
