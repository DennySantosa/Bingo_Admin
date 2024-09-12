
interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  rows?: number;
  cols?: number;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextAreaInput: React.FC<TextAreaProps> = (props) => {
  return (
    <textarea
      {...props}
      className="dark:bg-blackPrimary bg-white dark:text-whiteSecondary text-blackPrimary w-full h-40 indent-3 outline-none border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:hover:border-gray-500 hover:border-gray-400 py-3 px-4 resize-none"
    ></textarea>
  );
};
export default TextAreaInput;
