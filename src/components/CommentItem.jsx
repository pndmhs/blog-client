import { DateTime } from "luxon";
import DeleteIcon from "../assets/trash.svg?react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const CommentItem = ({ name, timestamp, text }) => {
  const { authed } = useContext(AuthContext);

  const formatDate = (date) => {
    return DateTime.fromISO(date).toLocaleString(DateTime.DATETIME_MED);
  };

  return (
    <div className="py-4 px-5 border border-solid border-neutral-400 rounded-md flex">
      <div className="mr-auto">
        <h4 className="font-medium text-lg">{name}</h4>
        <p className="text-yellow-900 text-sm">{formatDate(timestamp)}</p>
        <p className="mt-3">{text}</p>
      </div>
      {authed && (
        <button className="bg-red-700 px-1 py-1 text-white rounded-md cursor-pointer self-start">
          <DeleteIcon />
        </button>
      )}
    </div>
  );
};

export default CommentItem;
