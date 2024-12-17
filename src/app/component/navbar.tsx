import Link from "next/link";
import React from "react";
import { RiSofaLine } from "react-icons/ri";

export default function Navbar() {
    return (
<div className="w-full h-[84px]  bg-slate-300">
  <div className="p-5 flex justify-start gap-3">
  <RiSofaLine size={30} className="text-blue-400"/>
  <h1 className="font-bold text-xl">Comforty</h1>
  </div>

</div>
    )
}