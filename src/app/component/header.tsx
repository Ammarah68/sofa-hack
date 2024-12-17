import Link from "next/link";
import React from "react";
import { RiSofaLine } from "react-icons/ri";

export default function Header() {
    return (
<div className="flex justify-between items-center">
  <ul className="flex gap-6 list-none ml-8">
    <li className="hover:text-teal-600 hover:scale-110 transition duration-200">Home</li>
    <Link href="/shop" target="_blank">
      <li className="hover:text-teal-600 hover:scale-110 transition duration-200">Shop</li>
    </Link>
    <Link href="/product" target="_blank">
      <li className="hover:text-teal-600 hover:scale-110 transition duration-200">Product</li>
    </Link>
    <Link href="/pages" target="_blank">
      <li className="hover:text-teal-600 hover:scale-110 transition duration-200">Pages</li>
    </Link>
    <Link href="/about" target="_blank">
      <li className="hover:text-teal-600 hover:scale-110 transition duration-200">About</li>
    </Link>
    <Link href="/contact" target="_blank">
      <li className="hover:text-teal-600 text-right hover:scale-110 transition duration-200">Contact</li>
    </Link>


  </ul>
  <div>
    <a href="" className="hover:text-teal-600 hover:scale-110 transition duration-200">
      Contact (021) 340004040
    </a>
  </div>
</div>

    
  
    );
  }