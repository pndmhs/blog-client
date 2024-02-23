import { useNavigate } from "react-router-dom";
import he from "he";
import { updatePost } from "../api/api";

const PublishModal = ({ postData, closeModal }) => {
  const navigate = useNavigate();

  const handlePublish = async () => {
    try {
      const newData = {
        title: he.decode(postData.title),
        text: he.decode(postData.text),
        published: !postData.published,
      };
      await updatePost(postData._id, newData);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="fixed left-0 top-0 bg-gray-900/45 w-full h-full flex justify-center items-center">
      <div className="px-8 py-6 w-full max-w-fit bg-white flex flex-col items-center gap-6 rounded-md">
        <h3 className="text-2xl font-semibold">
          Are you sure you want to{" "}
          {postData.published ? "unpublish" : "publish"} this post?
        </h3>
        <div className="flex gap-8">
          <button
            className="px-4 py-2 bg-gray-900 text-white cursor-pointer rounded-md"
            onClick={handlePublish}
          >
            {postData.published ? "Unpublish" : "Publish"}
          </button>
          <button
            className="px-4 py-2 border border-gray-900 cursor-pointer rounded-md"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PublishModal;
