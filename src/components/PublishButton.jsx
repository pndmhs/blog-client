import PublishIcon from "../assets/publish.svg?react";
import UnpublishIcon from "../assets/unpublish.svg?react";

const PublishButton = ({ published, handlePublishToggle }) => {
  return (
    <button
      className="flex gap-2 px-3 py-2 text-white bg-gray-900 rounded-md"
      onClick={handlePublishToggle}
    >
      {!published ? (
        <>
          <PublishIcon />
          Publish Post
        </>
      ) : (
        <>
          <UnpublishIcon />
          Unpublish Post
        </>
      )}
    </button>
  );
};

export default PublishButton;
