const RowsPerPage = () => {
  return (
    <div className="flex gap-2 items-center">
      <p className="dark:text-whiteSecondary text-blackPrimary text-lg font-semibold">Rows per page:</p>
      <select
        className="w-28 h-10 dark:bg-blackPrimary bg-whiteSecondary border border-gray-300 dark:border-gray-600 dark:text-whiteSecondary text-blackPrimary rounded-lg shadow-md transition duration-300 ease-in-out pl-3 pr-8 cursor-pointer hover:border-gray-500 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none"
        name="rows"
        id="rows"
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
      </select>
    </div>

  );
};
export default RowsPerPage;
