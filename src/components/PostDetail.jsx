import CommentLists from "./CommentsList";
import CommentForm from "./CommentForm";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DateTime } from "luxon";

const PostDetail = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const { post_id } = useParams();

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/posts/${post_id}`
        );
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getPost();
  }, []);

  const formatDate = (date) => {
    return DateTime.fromISO(date).toLocaleString(DateTime.DATETIME_MED);
  };

  return (
    <main className="w-full px-5">
      <div className="w-full max-w-[820px] mx-auto py-8">
        {loading && <p>Loading...</p>}
        {error && <h2 className="font-semibold text-3xl">{error}</h2>}
        {data && (
          <>
            <h2 className="font-semibold text-3xl mb-2">{data.title}</h2>
            <p className="text-yellow-900">{formatDate(data.created_at)}</p>
            <div className="py-8 flex flex-col gap-6 font-merriweather">
              {data.text
                .split("\n")
                .filter((par) => par !== "")
                .map((par, index) => (
                  <p key={index}>{par}</p>
                ))}
            </div>
            <hr />
            <CommentLists />
            <CommentForm />
          </>
        )}
      </div>
    </main>
  );
};

export default PostDetail;
