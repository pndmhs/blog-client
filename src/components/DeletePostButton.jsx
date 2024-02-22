import { useState } from "react";
import DeleteIcon from "../assets/trash.svg?react";
import DeleteModal from "./DeleteModal";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DeletePostButton = ({ post_id }) => {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const deletePost = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    try {
      await axios.delete(`http://localhost:3000/posts/${post_id}`, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <button
        className="flex gap-2 px-3 py-2 text-white bg-red-700 cursor-pointer rounded-md"
        onClick={() => setShowModal(true)}
      >
        <DeleteIcon />
        Delete Post
      </button>
      {showModal && (
        <DeleteModal
          message="Are you sure you want to delete this post?"
          onConfirm={deletePost}
          closeModal={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default DeletePostButton;
