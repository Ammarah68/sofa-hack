import Link from "next/link";
import React from "react";
import { BsCartPlusFill } from "react-icons/bs";



export default function PinkSofa() {
    return (
        <div className="rounded-lg font-[sans-serif] p-4 grid grid-cols-1">
        <img
          src={"/Image.png"}
          alt="Library Stool Chair"
          className="w-full h-[200px] rounded-lg object-cover"
        />


        <div>
<h1 className="flex font-bold ">Library Stool Chair</h1>
<p className="text-nowrap bg-gray-500"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure vel rem voluptates nihil ea est, necessitatibus in mollitia quod sit atque, facere magnam cum sunt libero delectus aliquid nulla quo!</p>

<button
          type="button"
          className="px-3 py-2 rounded-lg text-white text-sm tracking-wider bg-blue-600 hover:bg-blue-700 outline-none flex items-center"
        >
          <BsCartPlusFill size={20} />Add To Card
        </button>


        </div>
        </div>
        
    );
  }
  