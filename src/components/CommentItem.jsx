import { DateTime } from "luxon";

const CommentItem = ({ name, timestamp, text }) => {
  const formatDate = (date) => {
    return DateTime.fromISO(date).toLocaleString(DateTime.DATETIME_MED);
  };

  return (
    <div className="py-4 px-5 border border-solid border-neutral-400">
      <h4 className="font-medium text-lg">{name}</h4>
      <p className="text-yellow-900 text-sm">{formatDate(timestamp)}</p>
      <p className="mt-3">{text}</p>
    </div>
  );
};

export default CommentItem;
