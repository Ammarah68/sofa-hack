import React from "react";
import { BsCartPlusFill } from "react-icons/bs";
import Link from "next/link";


export default function PinkSofa() {
    return (
        <div className="justify-center text-sm sm:text-base md:text-lg lg:text-xl items-center grid grid-cols-2">
          <div className="rounded-lg font-[sans-serif]">
        <img
          src={"/Image.png"}
          alt="Library Stool Chair"
          className="w-[300px] m-60 h-[300px] rounded-lg object-cover"
        />
</div>

        <div className="">
<h1 className="flex font-bold  text-2xl">Library Stool Chair</h1>
<p className=" leading-relaxed text-gray-500 "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure vel rem voluptates nihil ea est, necessitatibus in mollitia quod sit atque, facere magnam cum sunt libero delectus aliquid nulla quo!</p>
<div>
<Link href="/cart" target="_blank"><button
          type="button"
          className="px-3 py-2 rounded-lg text-white text-sm tracking-wider bg-blue-600 hover:bg-blue-700 outline-none flex items-center"
        >
          <BsCartPlusFill size={20} />Add To Card
        </button></Link>
</div>
        </div>

        {/* Featured product */}
        
<div className="px-6 py-4">
  {/* Header */}
  <h3 className="text-xl text-gray-800 font-bold mb-4">Featured Products</h3>

  {/* Product Grid */}
  <div className="grid grid-cols-4 gap-6">
    {/* Product Card 1 */}
    <div className="rounded-lg hover:scale-110 transition duration-200 font-[sans-serif] p-4">
      <img
        src={"/01.jpg"}
        alt="Library Stool Chair"
        className="w-full h-[200px] rounded-lg object-cover"
      />
    </div>

    {/* Product Card 2 */}
    <div className="rounded-lg hover:scale-110 transition duration-200  font-[sans-serif]  p-4">
       <img
        src={"/Image.png"}
        alt="Library Stool Chair"
        className="w-full h-[200px] hover:scale-110 transition duration-200 rounded-lg object-cover"
      /> 
    </div>

    {/* Product Card 3 */}
    <div className="rounded-lg hover:scale-110 transition duration-200  font-[sans-serif]  p-4">
    <a href="03.jpg" ><img
        src={"/03.jpg"}
        alt="Library Stool Chair"
        className="w-full h-[200px] rounded-lg object-cover"
      /></a>
    </div>

    {/* Product Card 4 */}
    <div className="rounded-lg hover:scale-110 transition duration-200  font-[sans-serif] p-4">
      <img
        src={"/14.jpg"}
        alt="Library Stool Chair"
        className="w-full h-[200px] rounded-lg object-cover"
      />
    </div>
  </div>
  </div>
  </div>
  )
  }