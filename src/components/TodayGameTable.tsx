

import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { HiOutlinePencil } from "react-icons/hi";
import { HiOutlineTrash } from "react-icons/hi";
import { HiOutlineEye } from "react-icons/hi";
import { TodayGameAdminItems } from "../utils/data";

const inStockClass: string =
  "text-green-400 bg-green-400/10 flex-none rounded-full p-1";
const outOfStockClass: string =
  "text-rose-400 bg-rose-400/10 flex-none rounded-full p-1";



const TodayGameTable = () => {
  return (
    <table className="mt-6 w-full whitespace-nowrap text-left max-lg:block max-lg:overflow-x-scroll">
      <colgroup>
        <col className="w-full sm:w-4/12" />
        <col className="lg:w-4/12" />
        <col className="lg:w-2/12" />
        <col className="lg:w-1/12" />
        <col className="lg:w-1/12" />
      </colgroup>
      <thead className="border-b border-white/10 text-sm leading-6 dark:text-whiteSecondary text-blackPrimary">
        <tr>
          <th
            scope="col"
            className="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8"
          >
            Game Id
          </th>
          <th scope="col" className="py-2 pl-0 pr-8 font-semibold table-cell">
            Errors
          </th>
          <th scope="col" className="py-2 pl-0 pr-8 font-semibold table-cell">
            Status
          </th>
          <th
            scope="col"
            className="py-2 pl-0 pr-8 font-semibold table-cell lg:pr-20"
          >
            Number of Players
          </th>
      
        </tr>
      </thead>
      <tbody className="divide-y divide-white/5">
        {TodayGameAdminItems.map((item) => (
          <tr key={nanoid()}>
            <td className="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
              <div className="flex items-center gap-x-4">
                <img
                  src={item.TodayGame.imageUrl}
                  alt=""
                  className="h-8 w-8 rounded-full bg-gray-800"
                />
                <div className="truncate text-sm font-medium leading-6 dark:text-whiteSecondary text-blackPrimary">
                  {item.TodayGame.name}
                </div>
              </div>
            </td>
            <td className="py-4 pl-0 pr-4 table-cell pr-8">
              <div className="flex gap-x-3">
                <div className="font-mono text-sm leading-6 dark:text-whiteSecondary text-blackPrimary">
                  {item.error}
                </div>
              </div>
            </td>
            <td className="py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20">
              <div className="flex items-center gap-x-2 justify-start">
                <div
                  className={
                    item.status === "Playing" ? inStockClass : outOfStockClass
                  }
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-current" />
                </div>
                <div className="dark:text-whiteSecondary text-blackPrimary block">
                  {item.status}
                </div>
              </div>
            </td>
            <td className="py-4 pl-0 pr-8 text-sm leading-6 dark:text-rose-200 text-rose-600 font-medium table-cell lg:pr-20">
              {item.usernumber}
            </td>
            <td className="py-4 pl-0 pr-4 text-right text-sm leading-6 dark:text-whiteSecondary text-blackPrimary table-cell pr-6 lg:pr-8">
              <div className="flex gap-x-1 justify-end">
                <Link
                  to="/TodayGames/1"
                  className="border-l-0 bg-gradient-to-r from-blue-300 to-purple-700 text-white font-semibold rounded-full shadow-lg w-8 h-8 flex justify-center items-center transition-transform transform hover:scale-150 hover:shadow-xl border border-transparent hover:border-gray-300 cursor-pointer"
                >
                  <HiOutlinePencil className="text-lg" />
                </Link>
                <Link
                  to="/TodayGames/1"
                  className="border-l-0 bg-gradient-to-r from-blue-300 to-purple-700 text-white font-semibold rounded-full shadow-lg w-8 h-8 flex justify-center items-center transition-transform transform hover:scale-150 hover:shadow-xl border border-transparent hover:border-gray-300 cursor-pointer"
                >
                  <HiOutlineEye className="text-lg" />
                </Link>
                <Link
                  to="#"
                  className="border-l-0 bg-gradient-to-r from-blue-300 to-purple-700 text-white font-semibold rounded-full shadow-lg w-8 h-8 flex justify-center items-center transition-transform transform hover:scale-150 hover:shadow-xl border border-transparent hover:border-gray-300 cursor-pointer"
                >
                  <HiOutlineTrash className="text-lg" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TodayGameTable;
