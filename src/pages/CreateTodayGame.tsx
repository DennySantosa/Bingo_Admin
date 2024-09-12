import { ImageUpload, InputWithLabel, Sidebar } from "../components";
import { HiOutlineSave } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AiOutlineSave } from "react-icons/ai";
import SimpleInput from "../components/SimpleInput";
import TextAreaInput from "../components/TextAreaInput";
import SelectInput from "../components/SelectInput";
import { selectList, stockStatusList } from "../utils/data";
import { selectTimeList } from "../utils/data";

const CreateTodayGame = () => {
  return (
    <div className="h-auto border-t border-blackSecondary border-1 flex dark:bg-blackPrimary bg-whiteSecondary">
      <Sidebar />
      <div className="hover:bg-blackPrimary bg-whiteSecondary w-full ">
        <div className="dark:bg-blackPrimary bg-whiteSecondary py-10">
          <div className="px-4 sm:px-6 lg:px-8 pb-8 border-b border-gray-800 flex justify-between items-center max-sm:flex-col max-sm:gap-5">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary">
                Add New Game
              </h2>
            </div>
            <div className="flex gap-x-2 max-[370px]:flex-col max-[370px]:gap-2 max-[370px]:items-center">
              <button className="bg-gradient-to-r from-gray-200 to-gray-300 border border-gray-400 rounded-lg w-48 py-2 text-lg font-medium text-gray-800 flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:border-gray-500">
                <AiOutlineSave className="text-xl text-gray-800" />
                <span className="text-gray-800">Save draft</span>
              </button>
            </div>
          </div>
          <div className="px-4 sm:px-6 lg:px-8 pb-8 pt-8 grid grid-cols-2 gap-x-10 max-xl:grid-cols-1 max-xl:gap-y-10">
            <div>
              <h3 className="text-2xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary">
                Basic information
              </h3>
              <div className="mt-4 flex flex-col gap-5">
                <InputWithLabel label="Game Id">
                  <SimpleInput
                    type="text"
                    placeholder="Enter a Game Id..."
                  />
                </InputWithLabel>
                <InputWithLabel label="Description">
                  <TextAreaInput
                    placeholder="Enter Game description..."
                    rows={4}
                    cols={50}
                  />
                </InputWithLabel>
                <InputWithLabel label="Game Format">
                  <SelectInput selectList={selectList} />
                </InputWithLabel>
              </div>

              <h3 className="text-2xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary mt-16">
                Create Inforamtion
              </h3>
              <div className="mt-4 flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-x-5 max-[500px]:grid-cols-1 max-[500px]:gap-x-0 max-[500px]:gap-y-5">
                  <InputWithLabel label="Game Generation Time">
                    <SelectInput selectList={selectTimeList} />
                  </InputWithLabel>
                  <InputWithLabel label="Max Members">
                    <SimpleInput
                      type="number"
                      placeholder="Enter number of Max Members..."
                    // className="dark:bg-gray-800 bg-white dark:text-white text-blackPrimary border border-gray-300 dark:border-gray-600 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out placeholder-gray-400 p-3"
                    />
                  </InputWithLabel>
                </div>
                <div className="grid grid-cols-2 gap-x-5 max-[500px]:grid-cols-1 max-[500px]:gap-x-0 max-[500px]:gap-y-5">
                  <InputWithLabel label="Start Date & Time">
                    <SimpleInput
                      type="datetime-local"
                      placeholder=""
                    />
                  </InputWithLabel>
                  <InputWithLabel label="End Date & Time">
                    <SimpleInput
                      type="datetime-local"
                      placeholder=""
                    />
                  </InputWithLabel>
                </div>
                <InputWithLabel label="Additional information">
                  <SimpleInput
                    type="text"
                    placeholder="Enter a Additional information..."
                  />
                </InputWithLabel>
                <InputWithLabel label="Game status">
                  <SelectInput selectList={stockStatusList} />
                </InputWithLabel>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary">
                TodayGame images
              </h3>
              <ImageUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateTodayGame;
