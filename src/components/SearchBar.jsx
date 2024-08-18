import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { IoFilterOutline } from "react-icons/io5";
import { RxMagnifyingGlass } from "react-icons/rx";
export default function SearchBar(props) {
    return (
        <div className="flex flex-row gap-3 justify-center  items-center w-full px-3">
            <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <RxMagnifyingGlass/>
                  </div>
                <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search to do here ..."
                    onChange={(e)=>{
                        props.setSearchKey(e.target.value);
                    }}/>
            </div>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-[10px] text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        <IoFilterOutline className="text-gray-400 h-5 w-5"/>
                    </MenuButton>
                </div>
                <MenuItems transition className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                    <div className="py-1">
                        <MenuItem>
                            <a className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900" onClick={()=>{props.sortNote("ASC")}}>
                            Sort by time ASC
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900" onClick={()=> {props.sortNote("DESC")}}>
                            Sort by time DESC
                            </a>
                        </MenuItem>
                    </div>
                </MenuItems>
            </Menu>
        </div>
    )
}