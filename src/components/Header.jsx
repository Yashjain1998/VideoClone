import React,{useContext} from "react";
// import { SlMenu } from "react-icons/sl";
// import { IoIosSearch } from "react-icons/io";
// import { RiVideoAddLine } from "react-icons/ri";
// import { FiBell } from "react-icons/fi";
// import { CgClose } from "react-icons/cg";
import { BiSolidVideos } from "react-icons/bi";
import { Context } from "../context/contextApi";


function Header() {
  const {  page,setpage } = useContext(Context);
  return (
    <div className="bg-black py-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold"><button className="bg-red-600 px-5 py-4 rounded-xl">
              <BiSolidVideos className="text-white text-xl" />
            </button>
          {/* <SlMenu/>
          <IoIosSearch/>
          <RiVideoAddLine/>
          <FiBell/>
          <CgClose/> */}
          </h1>
          <div className="flex space-x-4">
            <button className="bg-red-400 text-white hover:bg-red-700 px-4 py-2 rounded-md" disabled={page === 0} onClick={()=>setpage(page-1)}>
              Prev
            </button>
            <button className="bg-red-400 text-white hover:bg-red-700 px-4 py-2 rounded-md" onClick={()=>setpage(page+1)}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
