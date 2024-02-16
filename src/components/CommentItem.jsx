const CommentItem = ({ name, timestamp, text }) => {
  return (
    <div className="py-4 px-5 border border-solid border-neutral-400">
      <h4 className="font-medium text-lg">{name}</h4>
      <p className="text-yellow-900 text-sm">{timestamp}</p>
      <p className="mt-2">{text}</p>
    </div>
  );
};

export default CommentItem;
