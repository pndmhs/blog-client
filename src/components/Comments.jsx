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

  const getComments = async () => {
    try {
      const response = await axios.get(
        `https://blog-api-pndmhs.koyeb.app/posts/${post_id}/comments`
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

  const deleteComment = async (comment_id) => {
    const user = JSON.parse(localStorage.getItem("user"));
    try {
      await axios.delete(
        `https://blog-api-pndmhs.koyeb.app/posts/${post_id}/comments/${comment_id}`,
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      );
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
        deleteComment={deleteComment}
      />
      <CommentForm comments={comments} setComments={setComments} />
    </>
  );
};

export default Comments;
