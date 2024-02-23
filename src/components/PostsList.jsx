import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostItem from "./PostItem";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const PostsList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { authed } = useContext(AuthContext);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get(
          `https://blog-api-pndmhs.koyeb.app/posts`
        );
        const publishedPosts = response.data.filter((post) => post.published);
        setData(authed ? response.data : publishedPosts);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getPosts();
  }, [authed]);

  return (
    <main className="w-full px-5">
      <div className="w-full max-w-[820px] mx-auto py-8">
        <div className="flex items-center">
          <h2 className="text-4xl font-semibold">Posts</h2>
          {authed && (
            <Link to="/posts/new" className="ml-auto">
              + New Post
            </Link>
          )}
        </div>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {data && (
          <>
            <p className="text-yellow-900 mb-11">{data.length} Posts</p>
            <div className="flex flex-col gap-11">
              {data.map((post, index) => (
                <PostItem key={index} data={post} />
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default PostsList;
