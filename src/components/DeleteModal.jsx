import axios from "axios";
import { useNavigate } from "react-router-dom";

const DeleteModal = ({ post_id, closeModal }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
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
    <div className="absolute left-0 top-0 bg-gray-900/45 w-full h-full flex justify-center items-center">
      <div className="px-8 py-6 w-full max-w-fit bg-white flex flex-col items-center gap-6 rounded-md">
        <h3 className="text-2xl font-semibold">
          Are you sure you want to delete this post?
        </h3>
        <div className="flex gap-8">
          <button
            className="px-4 py-2 bg-red-700 text-white cursor-pointer rounded-md"
            onClick={handleDelete}
          >
            Delete
          </button>
          <button
            className="px-4 py-2 bg-gray-900 text-white cursor-pointer rounded-md"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
