import he from "he";
import { DateTime } from "luxon";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { fetchPost } from "../api/api";
import EditIcon from "../assets/edit.svg?react";
import Comments from "../components/Comments";
import DeleteModal from "../components/DeleteModal";
import DeletePostButton from "../components/DeletePostButton";
import Loading from "../components/Loading";
import PublishButton from "../components/PublishButton";
import PublishModal from "../components/PublishModal";
import { AuthContext } from "../context/AuthContext";

const PostDetail = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [deleteModal, setDeleteModal] = useState(false);
  const [publishModal, setPublishModal] = useState(false);

  const { post_id } = useParams();

  const { authed } = useContext(AuthContext);

  useEffect(() => {
    const getPost = async () => {
      try {
        const data = await fetchPost(post_id);
        setData(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getPost();
  }, [authed]);

  const formatDate = (date) => {
    return DateTime.fromISO(date).toLocaleString(DateTime.DATETIME_MED);
  };

  const handlePublishToggle = () => {
    setPublishModal(!deleteModal);
  };

  return (
    <main className="w-full px-5">
      <div className="w-full max-w-[820px] mx-auto py-8">
        {loading && <Loading text="Loading post" />}
        {error && <h2 className="font-semibold text-3xl">{error}</h2>}
        {data && (
          <>
            <h2 className="font-semibold text-3xl mb-2">
              {he.decode(data.title)} {!data.published && "(Not Published)"}
            </h2>
            <p className="text-yellow-900">
              {formatDate(data.created_at)}{" "}
              {data.modified_at &&
                `| Edited at ${formatDate(data.modified_at)}`}
            </p>
            {authed && (
              <div className="flex gap-4 mt-3">
                <PublishButton
                  published={data.published}
                  handlePublishToggle={handlePublishToggle}
                />
                <Link
                  to={`/posts/${post_id}/edit`}
                  className="flex gap-2 px-3 py-2 text-white bg-gray-900 rounded-md"
                >
                  <EditIcon />
                  Edit Post
                </Link>
                <DeletePostButton post_id={post_id} />
              </div>
            )}

            <div className="py-8 flex flex-col gap-6 font-merriweather">
              {data.text
                .split("\n")
                .filter((par) => par !== "")
                .map((par, index) => (
                  <p key={index}>{he.decode(par)}</p>
                ))}
            </div>
            <hr />
            {data.published && <Comments />}
          </>
        )}
      </div>
      {deleteModal && (
        <DeleteModal
          post_id={post_id}
          closeModal={() => {
            setDeleteModal(false);
          }}
        />
      )}
      {publishModal && (
        <PublishModal
          postData={data}
          closeModal={() => {
            setPublishModal(false);
          }}
        />
      )}
    </main>
  );
};

export default PostDetail;
