import Dark from "../assets/Dark.webm";
import BillboardButton from "./BillboardButton"

export default function Billboard() {
  return (
    <div className="relative h-screen">
        <video src={Dark} className="w-full h-full object-cover brightness-[75%]
         transition duration-500" autoPlay muted loop></video>
         <div className="absolute top-[40%] ml-16">
            <p className="text-white mt-8 mb-5 drop-shadow-x; text-7xl">DARK</p>
            <div className="flex items-center mt-4 gap-3">
               <BillboardButton text="play" theme="light"/>
               <BillboardButton text="More Info" theme="dark"/>
            </div>
         </div>
    </div>
  )
}
