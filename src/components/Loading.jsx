import { Oval } from "react-loader-spinner";

const Loading = ({ text }) => {
  return (
    <div className="flex gap-2 items-center">
      <Oval strokeWidth="9" width="1rem" height="1rem" color="#111827" />
      <p>{text}</p>
    </div>
  );
};

export default Loading;
