import LinesEllipsis from "react-lines-ellipsis";
import { Link } from "react-router-dom";
import { DateTime } from "luxon";

const PostItem = ({ data }) => {
  const formatDate = (date) => {
    return DateTime.fromISO(date).toLocaleString(DateTime.DATE_MED);
  };

  return (
    <div className="flex flex-col gap-2 cursor-pointer">
      <h3 className="font-semibold text-xl hover:underline">
        <Link to={`/posts/${data._id}`}>
          {data.title} {!data.published && "(Not Published)"}
        </Link>
      </h3>
      <LinesEllipsis
        text={data.text}
        maxLine="3"
        ellipsis="..."
        trimRight
        basedOn="words"
        className="font-merriweather text-sm opacity-80"
      />
      <p className="text-yellow-900 text-sm">{formatDate(data.created_at)}</p>
    </div>
  );
};

export default PostItem;
