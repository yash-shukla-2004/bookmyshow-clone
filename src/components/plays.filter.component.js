import React from "react";

import { Disclosure } from '@headlessui/react';

import { IoIosArrowUp,IoIosArrowDown } from "react-icons/io";

const PlaysFilter =(props) => {
  return (
    <Disclosure>
        {({open}) => (
            <>
      <Disclosure.Button className="py-2 flex items-center gap-2">
        {open ? <IoIosArrowUp /> : <IoIosArrowDown />} 
        <span className={open ? "text-red-600":"text-gray-800"}>
            {props.title}
        </span>
      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500">
      <div className="flex item-center gap-3 flex-wrap py-2">
         {props.tags.map((tag) => (
           <>
            <div className="border-2 border-gray-200 p-1">
            <span className="text-red-600 text-sm">{tag}</span>
            </div>
           </>
         ))

         }
        </div>
      </Disclosure.Panel>
      </>
        )}
    </Disclosure>
  )
}

export default PlaysFilter;