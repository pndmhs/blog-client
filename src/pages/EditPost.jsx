import axios from "axios";
import he from "he";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { updatePost } from "../api/api";
import PostForm from "../components/PostForm";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [published, setPublished] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await axios.get(
          `https://blog-api-pndmhs.koyeb.app/posts/${post_id}`,
        );
        setTitle(he.decode(response.data.title));
        setText(he.decode(response.data.text));
        setPublished(response.data.published);
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
      const newData = {
        title: he.decode(title),
        text: he.decode(text),
        modified_at: Date.now(),
        published,
      };
      const data = await updatePost(post_id, newData);
      navigate(`/posts/${data._id}`);
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
