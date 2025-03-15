import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { GrLocation } from "react-icons/gr";

const Dropdown: React.FC = () => {
  let array = ["Kochi", "Calicut", "Malappuram", "Thrissur", "Kannur"];

  // State to store location
  const [location, setlocation] = useState<string>("Location");
  // Function to select location
  const selectLocation = (item: string) => { 
    setlocation(item);
  };
  return (
    <Menu as="div" className="relative inline-block text-left m-0">
      <div>
        <Menu.Button className=" flex  text-black w-44 h-9 items-center pl-2  rounded-md  border-2 font-medium hover:bg-gray-100 ">
          <span className="text-xl m-0">
            <GrLocation className="m-0" />
          </span>
          <span className="mt-0">{location}</span>
          <ChevronDownIcon className="mt-1 h-5 " />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-1">
            {array.map((item) => (
              <Menu.Item key={item}>
                {({ active }) => (
                  <button
                    onClick={() => selectLocation(item)}
                    className={`${
                      active ? "bg-gray-100" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {item}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
