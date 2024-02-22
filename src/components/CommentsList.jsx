import CommentItem from "./CommentItem";

const CommentsList = ({ comments, loading, error, deleteComment }) => {
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
                data={comment}
                deleteComment={deleteComment}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CommentsList;
