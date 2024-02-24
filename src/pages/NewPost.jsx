import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { addPost } from "../api/api";
import PostForm from "../components/PostForm";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await addPost({ title, text });
      navigate(`/posts/${data._id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className="w-full px-5">
      <div className="w-full max-w-[820px] mx-auto py-8">
        <h2 className="text-4xl font-semibold mb-7">Add New Post</h2>
        <PostForm
          title={title}
          text={text}
          handleTitleChange={handleTitleChange}
          handleTextChange={handleTextChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </main>
  );
};

export default NewPost;
