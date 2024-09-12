

interface SimpleInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  type?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SimpleInput: React.FC<SimpleInputProps> = (props) => {
  return (
    <input
      {...props}
      className={`dark:bg-blackPrimary bg-white dark:text-whiteSecondary text-blackPrimary w-full h-12 indent-3 outline-none border border-gray-300 dark:border-gray-600 rounded-lg shadow-xl transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:hover:border-gray-500 hover:border-gray-400 ${props.className}`}
    />
  );
};
export default SimpleInput;
