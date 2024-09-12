

import { nanoid } from "nanoid";

interface TextAreaProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  selectList: { value: string; label: string }[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
}

const SelectInput: React.FC<TextAreaProps> = (props) => {  
  return (
    <select value={props.value} onChange={props.onChange} className="w-full h-12 dark:bg-blackPrimary bg-white border border-gray-300 dark:border-gray-600 dark:text-whiteSecondary text-blackPrimary rounded-lg shadow-lg appearance-none transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 hover:border-gray-400 cursor-pointer pl-4 pr-10">
      {props?.selectList &&
        props?.selectList.map((item: { value: string; label: string }) => {
          const { value, label } = item;

          return <option key={nanoid()} value={value}>{label}</option>;
        })}
    </select>
  );
};
export default SelectInput;
