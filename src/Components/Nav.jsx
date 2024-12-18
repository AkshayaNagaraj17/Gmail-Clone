import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { IoApps } from "react-icons/io5";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import Avatar from "react-avatar";
function Nav() {
  return (
   
      <div className="flex items-center mx-5 mt-10 ">
        <div className=" rounded-full hover:bg-slate-300 p-3 cursor-pointer">
          <GiHamburgerMenu />
        </div>
        <div className="w-7 ml-10">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThD6A938X2F3kMW50WVmJZtngHfx8eBXFL-w&s"
            alt="gmail"
          />
        </div>
        <h1 className="mx-2 text-2xl text-gray-500 font-medium">Gmail </h1>
        <div className="md:block hidden w-[50%] mr-60">
          <div className="flex items-center p-3 mx-5 rounded-full bg-slate-300">
            <IoIosSearch className="text-gray-700"></IoIosSearch>
            <input
              type="text"
              placeholder="Search mail"
              className="px-3 bg-transparent outline-none rounded w-full"
            />
          </div>
        </div>
        <div className="md:block hidden ">
          <div className="flex p-2 gap-5 ml-2 items-center justify-between">
            <div className=" rounded-full gap-2 flex items-center hover:bg-slate-300 p-3 cursor-pointer">
              <FaRegQuestionCircle size={"20px"} />
            </div>
            <div className=" rounded-full gap-2 flex items-center hover:bg-slate-300 p-3 cursor-pointer">
              <IoSettingsOutline size={"20px"} />
            </div>
            <div className=" rounded-full gap-2 flex items-center hover:bg-slate-300 p-3 cursor-pointer">
              <IoApps size={"20px"} />
            </div>
          </div>
        </div>
        <div className=" md:block ml-24">
          <div className="cursor-pointer">
            <Avatar
              size="45"
              round={true}
              src="data:image/jpeg;base64,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"
            ></Avatar>
          </div>
        </div>
      </div>
    
  );
}

export default Nav;
