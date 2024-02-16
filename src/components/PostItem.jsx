import LinesEllipsis from "react-lines-ellipsis";

const PostItem = ({ title, text, date }) => {
  return (
    <div className="flex flex-col gap-1 cursor-pointer">
      <h3 className="font-semibold text-xl hover:underline">{title}</h3>
      <p className="font-merriweather text-sm opacity-80">
        <LinesEllipsis
          text={text}
          maxLine="2"
          ellipsis="..."
          trimRight
          basedOn="words"
        />
      </p>
      <p className="text-yellow-900 text-sm">{date}</p>
    </div>
  );
};

export default PostItem;
