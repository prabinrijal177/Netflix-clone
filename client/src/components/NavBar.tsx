import { useEffect, useState } from 'react'
import Logo from '../assets/logo.png'


const tabs =[
    "Home",
    "Films",
    "New & Popular",
    "My List",
    "Browse by Languages",
]
export default function NavBar() {

  const [showBackground, setShowBackground] = useState(false);

  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      if(window.scrollY > 700){
        setShowBackground(true);
      }else{
        setShowBackground(false);
      }

    });
  },[]);
  return (
    <nav className="w-full fixed z-40">

        <div className={`px-16 py-3 flex items-center ${showBackground ? 'bg-black bg-opacity-90' : null}`}>

            <img className="h-16" src={Logo} alt="netflix-logo" />
            <div className="flex gap-7 ml-8">
             {tabs.map((tab) =>(
                <div key={tab} className="text-white hover:text-gray-300 cursor-pointer">
                <p>{tab}</p>
            </div>
             ))}
            </div>
        </div>
    </nav>
  )
}
