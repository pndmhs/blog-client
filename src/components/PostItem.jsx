import LinesEllipsis from "react-lines-ellipsis";
import { Link } from "react-router-dom";

const PostItem = ({ id, title, text, date }) => {
  return (
    <div className="flex flex-col gap-2 cursor-pointer">
      <h3 className="font-semibold text-xl hover:underline">
        <Link to={`/posts/${id}`}>{title}</Link>
      </h3>
      <LinesEllipsis
        text={text}
        maxLine="3"
        ellipsis="..."
        trimRight
        basedOn="words"
        className="font-merriweather text-sm opacity-80"
      />
      <p className="text-yellow-900 text-sm">{date}</p>
    </div>
  );
};

export default PostItem;
