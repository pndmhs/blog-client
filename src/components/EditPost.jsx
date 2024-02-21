import PostForm from "./PostForm";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/posts/${post_id}`
        );
        setTitle(response.data.title);
        setText(response.data.text);
        setError(null);
      } catch (err) {
        setError(err.message);
        setFormData(null);
      } finally {
        setLoading(false);
      }
    };
    getPost();
  }, []);

  const navigate = useNavigate();

  const { post_id } = useParams();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    try {
      const response = await axios.put(
        `http://localhost:3000/posts/${post_id}`,
        { title, text },
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
        <h2 className="text-4xl font-semibold mb-7">Edit Post</h2>
        {loading && <p>Loading post data...</p>}
        {error && <p>{error}</p>}
        {title && (
          <PostForm
            title={title}
            text={text}
            handleTitleChange={handleTitleChange}
            handleTextChange={handleTextChange}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </main>
  );
};

export default EditPost;
