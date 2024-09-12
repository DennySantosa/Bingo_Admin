import {
  HiOutlineChevronRight,
  HiOutlinePlus,
  HiOutlineSearch,
} from "react-icons/hi";
import {
  Pagination,
  RowsPerPage,
  Sidebar,
  UserTable,
  WhiteButton,
} from "../components";
import { AiOutlineExport } from "react-icons/ai";
import { userAdminItems } from "../utils/data";

const Users = () => {
  const downloadCSV = (data: any[], filename: string) => {
    const csvRows: string[] = [];
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(','));
    for (const row of data) {
      const values = headers.map(header => {
        const value = row[header];
        if (typeof value === 'object' && value !== null) {
          return JSON.stringify(value);
        }
        const escaped = ('' + value).replace(/"/g, '""');
        return `"${escaped}"`;
      });
      csvRows.push(values.join(','));
    }
    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', filename);
    a.click();
    URL.revokeObjectURL(url);
  };
  return (
    <div className="h-auto border-t border-blackSecondary border-1 flex dark:bg-blackPrimary bg-whiteSecondary">
      <Sidebar />
      <div className="dark:bg-blackPrimary bg-whiteSecondary w-full ">
        <div className="dark:bg-blackPrimary bg-whiteSecondary py-10">
          <div className="px-4 sm:px-6 lg:px-8 flex justify-between items-center max-sm:flex-col max-sm:gap-5">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary">
                All Users
              </h2>
              <p className="dark:text-whiteSecondary text-blackPrimary text-base font-normal flex items-center">
                <span>Dashboard</span>{" "}
                <HiOutlineChevronRight className="text-lg" />{" "}
                <span>All users</span>
              </p>
            </div>
            <div className="flex gap-x-2 max-[370px]:flex-col max-[370px]:gap-2 max-[370px]:items-center">
              <button className="bg-pink-200 text-white font-semibold rounded-lg shadow-md w-32 h-12 flex items-center justify-center space-x-2 transition-colors duration-300 hover:bg-pink-400" onClick={ ()=> downloadCSV(userAdminItems, 'total_users_data.csv')}>
                <AiOutlineExport className="dark:text-whiteSecondary text-blackPrimary text-base" />
                <span className="dark:text-whiteSecondary text-blackPrimary font-medium">Export</span>
              </button>
              <WhiteButton
                link="/users/create-user"
                text="Add a user"
                textSize="lg"
                py="2"
                width="48"
              >
                <HiOutlinePlus className="dark:text-blackPrimary text-whiteSecondary" />
              </WhiteButton>
            </div>
          </div>
          <div className="px-4 sm:px-6 lg:px-8 flex justify-between items-center mt-5 max-sm:flex-col max-sm:gap-2">
            <div className="relative">
              <HiOutlineSearch className="text-gray-400 text-lg absolute top-3 left-3" />
              <div className="relative w-full max-w-[600px]">
                <input
                  type="text"
                  className="w-full h-[50px] bg-white border border-gray-300 rounded-lg shadow-md placeholder-gray-400 focus:border-gray-600 focus:ring-2 focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-500 transition-all duration-300 ease-in-out pl-10 pr-4 indent-2 text-lg font-medium"
                  placeholder="Search here..."
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  🔍
                </span>
              </div>
            </div>
            <div className="relative inline-block w-60 border-l-0">
              <select
                className="w-full h-12 bg-gradient-to-r from-indigo-300 to-blue-600 text-white rounded-lg shadow-lg border border-transparent appearance-none focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 ease-in-out pl-4 pr-10 cursor-pointer hover:shadow-xl hover:scale-105 border-l-0"
                name="sort"
                id="sort"
                style={{ backgroundColor: 'white', color: 'black' }} // Ensuring options are visible
              >
                <option value="default" className="bg-white text-black">Sort by</option>
                <option value="az" className="bg-white text-black">A-Z</option>
                <option value="za" className="bg-white text-black">Z-A</option>
                <option value="newest" className="bg-white text-black">Newest</option>
                <option value="oldest" className="bg-white text-black">Oldest</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 10l5 5 5-5H7z" />
                </svg>
              </div>
            </div>
          </div>
          <UserTable />
          <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-6 max-sm:flex-col gap-4 max-sm:pt-6 max-sm:pb-0">
            <RowsPerPage />
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Users;
