

import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { HiOutlinePencil } from "react-icons/hi";
import { HiOutlineTrash } from "react-icons/hi";
import { HiOutlineEye } from "react-icons/hi";
import { orderAdminItems } from "../utils/data";



const OrderTable = () => {
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
            User
          </th>
          <th scope="col" className="py-2 pl-0 pr-8 font-semibold table-cell">
            Game Id
          </th>
          <th scope="col" className="py-2 pl-0 pr-8 font-semibold table-cell">
            Status
          </th>
          <th scope="col" className="py-2 pl-0 pr-8 font-semibold table-cell">
            Earned Points
          </th>
          <th
            scope="col"
            className="py-2 pl-0 pr-8 font-semibold table-cell lg:pr-20"
          >
            Create Date
          </th>

        </tr>
      </thead>
      <tbody className="divide-y divide-white/5">
        {orderAdminItems.map((item) => (
          <tr key={nanoid()}>
            <td className="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
              <div className="flex items-center gap-x-4">
                <img
                  src={item.user.imageUrl}
                  alt=""
                  className="h-8 w-8 rounded-full bg-gray-800"
                />
                <div className="truncate text-sm font-medium leading-6 dark:text-whiteSecondary text-blackPrimary">
                  {item.user.name}
                </div>
              </div>
            </td>
            <td className="py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20">
              <div className="flex items-center gap-x-2 justify-start">
                <div className="dark:text-rose-200 text-rose-500 block font-bold">
                  {item.gameid}
                </div>
              </div>
            </td>
            <td className="py-4 pl-0 pr-4 table-cell pr-8">
              <div className="flex gap-x-3">
                <div
                  className={`w-36 text-sm leading-6 py-2 px-4 rounded-lg shadow-lg transition-all duration-300 text-center 
                    ${item.status === "Winned" &&
                    "bg-green-700 dark:bg-green-900 text-white font-semibold border-2 border-green-800 hover:bg-green-800 hover:shadow-xl"}
                    ${item.status === "Viewing" &&
                    "bg-yellow-700 dark:bg-yellow-900 text-white font-semibold border-2 border-yellow-800 hover:bg-yellow-800 hover:shadow-xl"}
                    ${item.status === "Log outed" &&
                    "bg-red-700 dark:bg-red-900 text-white font-semibold border-2 border-red-800 hover:bg-red-800 hover:shadow-xl"}
                    ${item.status === "Playing" &&
                    "bg-blue-700 dark:bg-blue-900 text-white font-semibold border-2 border-blue-800 hover:bg-blue-800 hover:shadow-xl"}
                    `}
                >
                  {item.status}
                </div>
              </div>
            </td>
            <td className="py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20">
              <div className="flex items-center gap-x-2 justify-start">
                <div className="dark:text-rose-200 text-rose-500 block font-bold">
                  {item.earned}
                </div>
              </div>
            </td>
            <td className="py-4 pl-0 pr-8 text-sm leading-6 dark:text-whiteSecondary text-blackPrimary table-cell lg:pr-20">
              {item.date}
            </td>
            <td className="py-4 pl-0 pr-4 text-right text-sm leading-6 dark:text-whiteSecondary text-blackPrimary table-cell pr-6 lg:pr-8">
              <div className="flex gap-x-1 justify-end">
                <Link
                  to="/orders/1"
                  className="border-l-0 bg-gradient-to-r from-blue-300 to-purple-700 text-white font-semibold rounded-full shadow-lg w-8 h-8 flex justify-center items-center transition-transform transform hover:scale-150 hover:shadow-xl border border-transparent hover:border-gray-300 cursor-pointer"
                >
                  <HiOutlinePencil className="text-lg" />
                </Link>
                <Link
                  to="/orders/1"
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
export default OrderTable;
