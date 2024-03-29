const PostForm = ({
  title,
  text,
  handleTitleChange,
  handleTextChange,
  handleSubmit,
}) => {
  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          className="border border-neutral-400 max-w-full py-1 px-2 outline-none focus:border-black rounded-md"
          onChange={handleTitleChange}
          required
          value={title}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="text">Text</label>
        <textarea
          name="text"
          cols="30"
          rows="10"
          className="border border-neutral-400 max-w-full py-1 px-2 outline-none focus:border-black resize-none rounded-md"
          onChange={handleTextChange}
          required
          value={text}
        ></textarea>
      </div>
      <button
        type="submit"
        className="self-start font-medium py-2 px-4 bg-gray-900 text-white cursor-pointer hover:bg-white hover:text-gray-900 hover:border hover:border-gray-900 rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default PostForm;
