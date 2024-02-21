import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PostForm = () => {
  const [formData, setFormData] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    try {
      const response = await axios.post(
        "http://localhost:3000/posts/",
        formData,
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      );
      navigate(`/posts/${response.data._id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className="w-full px-5">
      <div className="w-full max-w-[820px] mx-auto py-8">
        <h2 className="text-4xl font-semibold mb-7">Add New Post</h2>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              className="border border-neutral-400 max-w-full py-1 px-2 outline-none focus:border-black"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="text">Text</label>
            <textarea
              name="text"
              cols="30"
              rows="10"
              className="border border-neutral-400 max-w-full py-1 px-2 outline-none focus:border-black"
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="self-start font-medium py-2 px-4 bg-gray-900 text-white cursor-pointer hover:bg-white hover:text-gray-900 hover:border hover:border-gray-900"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default PostForm;
