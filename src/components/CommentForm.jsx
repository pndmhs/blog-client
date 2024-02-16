const CommentForm = () => {
  return (
    <div className="py-8">
      <h3 className="text-2xl font-semibold">Leave a comment</h3>
      <form action="#" method="post" className="mt-8 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="font-medium">
            Name
            <span className="text-yellow-900"> *</span>
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="border border-neutral-400 w-72 max-w-full py-2 px-3 outline-none focus:border-black"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="text" className="font-medium">
            Message
            <span className="text-yellow-900"> *</span>
          </label>
          <textarea
            name="text"
            id="text"
            cols="30"
            rows="10"
            className="border border-neutral-400 resize-none py-2 px-3 outline-none focus:border-black"
          ></textarea>
        </div>
        <button
          type="submit"
          className="self-start font-medium py-2 px-4 bg-gray-900 text-white cursor-pointer hover:bg-white hover:text-gray-900 hover:border hover:border-gray-900"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
