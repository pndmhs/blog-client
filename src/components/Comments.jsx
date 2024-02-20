import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentsList from "./CommentsList";
import CommentForm from "./CommentForm";
import axios from "axios";

const Comments = () => {
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { post_id } = useParams();

  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/posts/${post_id}/comments`
        );
        setComments(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setComments(null);
      } finally {
        setLoading(false);
      }
    };
    getComments();
  }, []);

  return (
    <>
      <CommentsList comments={comments} loading={loading} error={error} />
      <CommentForm comments={comments} setComments={setComments} />
    </>
  );
};

export default Comments;
