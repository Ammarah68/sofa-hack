import { FaArrowRight } from "react-icons/fa6";
import React from "react";
import { BsCartPlusFill } from "react-icons/bs";

export default function Features() {
  return (
    
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
      <p className="mt-2 text-sm text-gray-600 leading-relaxed hover:text-teal-600">
        Library Stool Chair
      </p>
      <div className="mt-4 flex items-center justify-between">
        <h3 className="text-xl text-gray-800 font-bold">$20</h3>
        <button
          type="button"
          className="px-3 py-2 rounded-lg text-white text-sm tracking-wider bg-blue-600 hover:bg-blue-700 outline-none flex items-center"
        >
          <BsCartPlusFill size={20} />
        </button>
      </div>
    </div>

    {/* Product Card 2 */}
    <div className="rounded-lg hover:scale-110 transition duration-200  font-[sans-serif]  p-4">
       <img
        src={"/Image.png"}
        alt="Library Stool Chair"
        className="w-full h-[200px] hover:scale-110 transition duration-200 rounded-lg object-cover"
      /> 
      <p className="mt-2 text-sm text-gray-600 leading-relaxed hover:text-teal-600">
        Library Stool Chair
      </p>
      <div className="mt-4 flex items-center justify-between">
        <h3 className="text-xl text-gray-800 font-bold">$20</h3>
        <button
          type="button"
          className="px-3 py-2 rounded-lg text-white text-sm tracking-wider bg-blue-600 hover:bg-blue-700 outline-none flex items-center"
        >
          <BsCartPlusFill size={20} />
        </button>
      </div>
    </div>

    {/* Product Card 3 */}
    <div className="rounded-lg hover:scale-110 transition duration-200  font-[sans-serif]  p-4">
    <a href="03.jpg" ><img
        src={"/03.jpg"}
        alt="Library Stool Chair"
        className="w-full h-[200px] rounded-lg object-cover"
      /></a>
      <p className="mt-2 text-sm text-gray-600 leading-relaxed hover:text-teal-600">
        Library Stool Chair
      </p>
      <div className="mt-4 flex items-center justify-between">
        <h3 className="text-xl text-gray-800 font-bold">$20</h3>
        <button
          type="button"
          className="px-3 py-2 rounded-lg text-white text-sm tracking-wider bg-blue-600 hover:bg-blue-700 outline-none flex items-center"
        >
          <BsCartPlusFill size={20} />
        </button>
      </div>
    </div>

    {/* Product Card 4 */}
    <div className="rounded-lg hover:scale-110 transition duration-200  font-[sans-serif] p-4">
      <img
        src={"/14.jpg"}
        alt="Library Stool Chair"
        className="w-full h-[200px] rounded-lg object-cover"
      />
      <p className="mt-2 text-sm text-gray-600 leading-relaxed hover:text-teal-600">
        Library Stool Chair
      </p>
      <div className="mt-4 flex items-center justify-between">
        <h3 className="text-xl text-gray-800 font-bold">$20</h3>
        <button
          type="button"
          className="px-3 py-2 rounded-lg text-white text-sm tracking-wider bg-blue-600 hover:bg-blue-700 outline-none flex items-center"
        >
          <BsCartPlusFill size={20} />
        </button>
      </div>
    </div>
  </div>


{/* 2ND ROW */}

{/* Product Grid */}
<div className="grid grid-cols-3 gap-6">
  {/* Product Card 1 */}
  <div className="rounded-lg font-[sans-serif] p-4">
    <img
      src={"/05.jpg"}
      alt="Library Stool Chair"
      className="w-full h-[200px] rounded-lg object-cover"
    />
    <p className="mt-2 text-sm text-gray-600 leading-relaxed hover:text-teal-600">
    Wing Chair
    </p>
    
  </div>

  {/* Product Card 2 */}
  <div className="rounded-lg font-[sans-serif] p-4">
    <img
      src={"/08.jpg"}
      alt="Library Stool Chair"
      className="w-full h-[200px] rounded-lg object-cover"
    />
    <p className="mt-2 text-sm text-gray-600 leading-relaxed hover:text-teal-600">
    Wooden Chair
    </p>
    
  </div>

  {/* Product Card 3 */}
  <div className="rounded-lg font-[sans-serif]  p-4">
    <img
      src={"/09.png"}
      alt="Desk Chairr"
      className="w-full h-[200px] rounded-lg object-cover"
    />
    <p className="mt-2 text-sm text-white bg-black leading-relaxed hover:text-teal-600">
    Desk Chair
    </p>
    
  </div>

{/* 3rd ROW */}
  <div className="flex justify-center items-center ml-40 w-[800px] h-[400px] gap-4 ">
  <div 
    className=" bg-cover bg-center rounded-lg hover:scale-110 transition duration-200">
    <a href="03.jpg"><img className="w-[2000px] h-[400px]" src={"03.jpg"}/></a>
  </div>

  <div className="gap-4 justify-center items-center hover:border">
    <div 
      className=" bg-cover bg-center rounded-lg">
      <img className="w-[1200px] h-[200px]" src={"04.jpg"}/>
    </div>
    <div 
      className=" bg-cover bg-center rounded-lg">
      <img className="w-[1200px] h-[200px]" src={"06.jpg"}/>
    </div>
    </div>

    <div className=" gap-4">
    <div 
      className=" bg-cover bg-center rounded-lg">
      <img className="w-[1200px] h-[200px]" src={"01.jpg"}/>
    </div>
    <div 
      className=" bg-cover bg-center rounded-lg">
      <img className="w-[1200px] h-[200px]" src={"01.jpg"}/>
    </div>
  </div>
</div>
    </div>

    {/* our product */}

<div>
    <h3 className="text-xl text- text-gray-800 font-bold mb-0 p-8">Our Product</h3>

  <div className="grid grid-cols-4 gap-6">
    {/* Product Card 1 */}
    <div className="rounded-lg font-[sans-serif] p-4">
      <img
        src={"/01.jpg"}
        alt="Library Stool Chair"
        className="w-full h-[200px] rounded-lg object-cover"
      />
      <p className="mt-2 text-sm text-gray-600 leading-relaxed hover:text-teal-600">
        Library Stool Chair
      </p>
      <div className="mt-4 flex items-center justify-between">
        <h3 className="text-xl text-gray-800 font-bold">$20</h3>
        <button
          type="button"
          className="px-3 py-2 rounded-lg text-white text-sm tracking-wider bg-blue-600 hover:bg-blue-700 outline-none flex items-center"
        >
          <BsCartPlusFill size={20} />
        </button>
      </div>
    </div>

    {/* Product Card 2 */}
    <div className="rounded-lg font-[sans-serif]  p-4">
      <img
        src={"/Image.png"}
        alt="Library Stool Chair"
        className="w-full h-[200px] rounded-lg object-cover"
      />
      <p className="mt-2 text-sm text-gray-600 leading-relaxed hover:text-teal-600">
        Library Stool Chair
      </p>
      <div className="mt-4 flex items-center justify-between">
        <h3 className="text-xl text-gray-800 font-bold">$20</h3>
        <button
          type="button"
          className="px-3 py-2 rounded-lg text-white text-sm tracking-wider bg-blue-600 hover:bg-blue-700 outline-none flex items-center"
        >
          <BsCartPlusFill size={20} />
        </button>
      </div>
    </div>

    {/* Product Card 3 */}
    <div className="rounded-lg font-[sans-serif]  p-4">
      <img
        src={"/03.jpg"}
        alt="Library Stool Chair"
        className="w-full h-[200px] rounded-lg object-cover"
      />
      <p className="mt-2 text-sm text-gray-600 leading-relaxed hover:text-teal-600">
        Library Stool Chair
      </p>
      <div className="mt-4 flex items-center justify-between">
        <h3 className="text-xl text-gray-800 font-bold">$20</h3>
        <button
          type="button"
          className="px-3 py-2 rounded-lg text-white text-sm tracking-wider bg-blue-600 hover:bg-blue-700 outline-none flex items-center"
        >
          <BsCartPlusFill size={20} />
        </button>
      </div>
    </div>

    {/* Product Card 4 */}
    <div className="rounded-lg font-[sans-serif] p-4">
      <img
        src={"/14.jpg"}
        alt="Library Stool Chair"
        className="w-full h-[200px] rounded-lg object-cover"
      />
      <p className="mt-2 text-sm text-gray-600 leading-relaxed hover:text-teal-600">
        Library Stool Chair
      </p>
      <div className="mt-4 flex items-center justify-between">
        <h3 className="text-xl text-gray-800 font-bold">$20</h3>
        <button
          type="button"
          className="px-3 py-2 rounded-lg text-white text-sm tracking-wider bg-blue-600 hover:bg-blue-700 outline-none flex items-center"
        >
          <BsCartPlusFill size={20} />
        </button>
      </div>
    </div>
  </div>
    


</div>


</div>



  )}      
    







