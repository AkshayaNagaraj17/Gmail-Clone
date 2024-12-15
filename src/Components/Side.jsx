import { FaFile, FaInbox, FaRegStar } from "react-icons/fa"
import { IoMdTime } from "react-icons/io"
import { LuPencil, LuSendHorizontal } from "react-icons/lu"
import { MdAccessTime } from "react-icons/md"


function Side() {
  return (
    <div className=" w-[30%]">
      <div className="p-3">
            <button className=" bg-blue-200 flex items-center gap-2  p-4 rounded-2xl hover:shadow-md">
                <LuPencil size={"24px"}></LuPencil>
                <h2>Compose</h2>
            </button>
      </div>
      <div>
        <div className="flex items-center gap-4 pl-6 py-1  my-2 font-bold text-gray-700 rounded-r-full hover:bg-slate-400 ">
            <FaInbox size={"20px"}></FaInbox>
            <p>Inbox</p>
        </div>
        <div className="flex items-center gap-4 pl-6 my-2 font-bold text-gray-700 rounded-r-full hover:bg-slate-400">
            <FaRegStar size={"20px"}></FaRegStar>
            <p>Starred</p>
        </div>
        <div className="flex items-center gap-4 pl-6 my-2 font-bold text-gray-700 rounded-r-full hover:bg-slate-400">
                <MdAccessTime size={"20px"}></MdAccessTime>
            <p>Snoozed</p>
        </div>
        <div className="flex items-center gap-4 pl-6 my-2 font-bold text-gray-700 rounded-r-full hover:bg-slate-400">
            <LuSendHorizontal size={"20px"}></LuSendHorizontal>
            <p>Sent</p>
        </div>
        <div className="flex items-center gap-4 pl-6 my-2 font-bold text-gray-700 rounded-r-full hover:bg-slate-400">
           <FaFile size={"20px"}></FaFile>
            <p>Draft</p>
        </div>
       
      </div>
    </div>
  )
}

export default Side
