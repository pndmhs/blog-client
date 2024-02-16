import CommentItem from "./CommentItem";

const comments = [
  {
    name: "Enzo Fernandez",
    text: "Hello Admin!",
    timestamp: "12 February 2024, at 10:25",
  },
  {
    name: "Cole Palmer",
    text: "Great post!",
    timestamp: "12 February 2024, at 11.35",
  },
  {
    name: "Thiago Silva",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla urna porttitor rhoncus dolor. Non diam phasellus vestibulum lorem sed.",
    timestamp: "13 February 2024, at 11.45",
  },
];

const CommentLists = () => {
  return (
    <div className="py-8">
      <h3 className="text-2xl font-semibold">3 Comments</h3>
      <div className="mt-8 flex flex-col gap-7">
        {comments.map((comment, index) => (
          <CommentItem
            key={index}
            name={comment.name}
            timestamp={comment.timestamp}
            text={comment.text}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentLists;
