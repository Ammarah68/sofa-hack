import Features from "./features";
import { FaArrowRight } from "react-icons/fa6";
export default function Main(){
    return(
      
<div>

<div className="flex justify-center items-center w-[800px] h-[500px] bg-slate-300 ml-36">
<div className="bg-slate-300 " >
  <h1 className="absolute  w-[400px] h-[100px] left-[200px] top-[267px] font-inter font-bold text-[40px] leading-[110%] capitalize text-[#272343]">Best Furniture Collection for your interior.
  </h1>
  <button className="absolute w-[171px] h-[52px] left-[200px] top-[514px] flex flex-row justify-center items-center gap-[20px] px-[24px] py-[14px] bg-[#029FAE] rounded-[8px]">Shop Now <FaArrowRight />

</button>
</div>
{/* CHAIR IMAGE */}
<div className="absolute w-[200px] h-[200x] left-[600px] top-[250px] flex"><img src={"/Product Image.png"}></img></div>

</div>



<div >



<div className="left-[80px]  top-[600px] w-full h-auto gap-10 flex items-center justify-center">
<div ><img src={"Logo (3).png"}></img></div>
<div><img src={"Logo (4).png"}></img></div>

<div><img src={"Logo (5).png"}></img></div>
<div><img src={"Logo (6).png"}></img></div>
<div><img src={"Logo (7).png"}></img></div>
<div><img src={"Logo (8).png"}></img></div>
<div><img src={"Logo (9).png"}></img></div>

</div>
</div>
<Features />
</div>
    

    
    )
}