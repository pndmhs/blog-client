import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const CommentForm = ({ comments, setComments }) => {
  const [formData, setFormData] = useState(null);

  const { post_id } = useParams();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://blog-api-pndmhs.koyeb.app/posts/${post_id}/comments`,
        formData
      );
      setComments([...comments, response.data]);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="py-8">
      <h3 className="text-2xl font-semibold">Leave a comment</h3>
      <form className="mt-8 flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="font-medium">
            Name
            <span className="text-yellow-900"> *</span>
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="border border-neutral-400 w-72 max-w-full py-2 px-3 outline-none focus:border-black rounded-md"
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="text" className="font-medium">
            Message
            <span className="text-yellow-900"> *</span>
          </label>
          <textarea
            name="text"
            id="text"
            cols="30"
            rows="10"
            className="border border-neutral-400 resize-none py-2 px-3 outline-none focus:border-black rounded-md"
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="self-start font-medium py-2 px-4 bg-gray-900 text-white cursor-pointer hover:bg-gray-800 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
