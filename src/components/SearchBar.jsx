import { RxMagnifyingGlass } from "react-icons/rx";
export default function SearchBar({setSearchKey}) {
    return (
        <div className="flex flex-row gap-3 justify-center  items-center w-full px-3">
            <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <RxMagnifyingGlass/>
                  </div>
                <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search to do here ..."
                    onChange={(e)=>{
                        setSearchKey(e.target.value);
                    }}/>
            </div>
        </div>
    )
}