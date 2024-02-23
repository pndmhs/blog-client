import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentsList from "./CommentsList";
import CommentForm from "./CommentForm";
import { fetchAllComments, deleteComment } from "../api/api";

const Comments = () => {
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { post_id } = useParams();

  const getComments = async () => {
    try {
      const data = await fetchAllComments(post_id);
      setComments(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setComments(null);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (comment_id) => {
    try {
      await deleteComment(post_id, comment_id);
      getComments();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <>
      <CommentsList
        comments={comments}
        loading={loading}
        error={error}
        deleteComment={handleDelete}
      />
      <CommentForm comments={comments} setComments={setComments} />
    </>
  );
};

export default Comments;
