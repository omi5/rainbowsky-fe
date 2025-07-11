import { FaStarOfLife } from "react-icons/fa6";

interface InputLabelProps {
  text: string;
  className?: string;
  isRequired?: boolean;
}

const InputLabel = ({ text, className, isRequired }: InputLabelProps) => {
  return (
    <label
      className={`${className} text-sm font-medium text-gray-700 mb-1 flex items-center`}
    >
      {text}
      {isRequired && <FaStarOfLife className="ml-1 text-red-500" size={8} />}
    </label>
  );
};

export default InputLabel;
