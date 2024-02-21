import PostForm from "./PostForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NewPost = () => {
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
        <PostForm handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
    </main>
  );
};

export default NewPost;
