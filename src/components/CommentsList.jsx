import CommentItem from "./CommentItem";
import Loading from "./Loading";

const CommentsList = ({ comments, loading, error, deleteComment }) => {
  return (
    <div className="py-8">
      {loading && <Loading text="Loading comments" />}
      {error && <p>{error}</p>}
      {comments && comments.length > 0 && (
        <>
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
        </>
      )}
    </div>
  );
};

export default CommentsList;
