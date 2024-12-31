
import logo from "../assets/logo.jpg"
import {navItems} from "../constants" 
import { Menu, X } from "lucide-react"
import { useState } from "react"

function  Navbar() {
    const [mobileDrawOpen, setMobileDrawOpen] = useState(false);

    //toggle vanbar with menu icon
    const toggleNavbar = () => {
        setMobileDrawOpen(!mobileDrawOpen);
    };

  return (
   <nav className="sticky top-0 z-50 py-3 border-b backdrop-blur-lg border-neutral-700/80">
    <div className="container relative px-4 mx-auto lg:text-sm">
        <div className="flex justify-between item-center">
            <div className="flex items-center flex-shrink-0">
                <img className="w-10 h-10 mr-2" src={logo} alt="logo" />
                <span className="text-xl tracking-tight">VirtualSup</span>
            </div>
            <ul className="hidden space-x-12 lg:flex ml:14 lg:mt-2">
                {navItems.map((item, index) => (
                    <li key={index} className="hover:text-purple-300 hover:scale-110">
                        <a href={item.href}>{item.label}</a>
                    </li>
                ))}
            </ul>
            <div className="items-center justify-center hidden space-x-12 lg:flex">
                <a href="#" className="px-3 py-2 border rounded-md hover:bg-neutral-800 hover:scale-110">Sign In</a>
                <a href="#" className="px-3 py-2 bg-purple-900 rounded-md bg-gradient-to-r hover:scale-110 from-purple-500 to">Create an account</a>

            </div>
            <div className="flex-col justify-end lg:hidden md:flex">
                <button onClick={toggleNavbar}> {mobileDrawOpen ? <X/> : <Menu/>}</button>
            </div>
        </div>

     {mobileDrawOpen && (
        <div className="fixed right-0 z-20 flex flex-col items-center justify-center w-full p-12 bg-neutral-900 lg:hidden">
                <ul className="lg:hidden">
                    {navItems.map((item,index) => (
                        <li key={index} className="p-3">
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center justify-center mt-3 space-x-12">
                        <a href="#" className="px-3 py-2 border rounded-md">Sign In</a>
                        <a href="#" className="px-3 py-2 bg-purple-800 rounded-md bg-gradient-to-r from-purple-500 to">Create an account</a>

                </div>
        </div>
       )}
       
    </div>
   </nav>
  )
};

export default  Navbar