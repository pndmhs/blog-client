const DeleteModal = ({ message, onConfirm, closeModal }) => {
  return (
    <div className="fixed left-0 top-0 bg-gray-900/45 w-full h-full flex justify-center items-center">
      <div className="px-8 py-6 w-full max-w-fit bg-white flex flex-col items-center gap-6 rounded-md">
        <h3 className="text-2xl font-semibold">{message}</h3>
        <div className="flex gap-8">
          <button
            className="px-4 py-2 bg-red-700 text-white cursor-pointer rounded-md"
            onClick={onConfirm}
          >
            Delete
          </button>
          <button
            className="px-4 py-2 bg-gray-900 text-white cursor-pointer rounded-md"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
