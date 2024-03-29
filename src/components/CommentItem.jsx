import { DateTime } from "luxon";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import DeleteCommentButton from "./DeleteCommentButton";
import he from "he";

const CommentItem = ({ data, deleteComment }) => {
  const { authed } = useContext(AuthContext);

  const formatDate = (date) => {
    return DateTime.fromISO(date).toLocaleString(DateTime.DATETIME_MED);
  };

  return (
    <div className="py-4 px-5 border border-solid border-neutral-400 rounded-md flex">
      <div className="mr-auto">
        <h4 className="font-medium text-lg">
          {data.username ? data.username : "Anonymous"}
        </h4>
        <p className="text-yellow-900 text-sm">{formatDate(data.timestamp)}</p>
        <p className="mt-3">{he.decode(data.text)}</p>
      </div>
      {authed && (
        <DeleteCommentButton deleteComment={() => deleteComment(data._id)} />
      )}
    </div>
  );
};

export default CommentItem;
