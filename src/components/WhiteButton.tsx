

import { Link } from "react-router-dom";

const WhiteButton = ({
  link,
  text,
  width,
  py,
  textSize,
  children,
}: {
  link: string;
  text: string;
  width: string;
  py: string;
  textSize: string;
  children?: React.ReactNode;
}) => {
  return (
    <Link
      to={link}
      className={`bg-blue-800 text-white font-semibold rounded-lg shadow-md w-${width} h-12 flex items-center justify-center space-x-2 py-${py} transition-colors duration-300 hover:bg-blue-600`}
    >
      {children}
      <span className="dark:text-blackPrimary text-whiteSecondary font-semibold">
        {text}
      </span>
    </Link>
  );
};
export default WhiteButton;
