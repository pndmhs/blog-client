import { useEffect, useState } from "react";
import CommentItem from "./CommentItem";
import axios from "axios";
import { useParams } from "react-router-dom";

// const comments = [
//   {
//     name: "Enzo Fernandez",
//     text: "Hello Admin!",
//     timestamp: "12 February 2024, at 10:25",
//   },
//   {
//     name: "Cole Palmer",
//     text: "Great post!",
//     timestamp: "12 February 2024, at 11.35",
//   },
//   {
//     name: "Thiago Silva",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla urna porttitor rhoncus dolor. Non diam phasellus vestibulum lorem sed.",
//     timestamp: "13 February 2024, at 11.45",
//   },
// ];

const CommentLists = () => {
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
      {loading && (
        <div className="py-8">
          <p>Loading comments...</p>
        </div>
      )}
      {error && (
        <div className="py-8">
          <p>{error}</p>
        </div>
      )}
      {comments && comments.length > 0 && (
        <div className="py-8">
          <h3 className="text-2xl font-semibold">{comments.length} Comments</h3>
          <div className="mt-8 flex flex-col gap-7">
            {comments.map((comment, index) => (
              <CommentItem
                key={index}
                name={comment.name}
                timestamp={comment.timestamp}
                text={comment.text}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CommentLists;
