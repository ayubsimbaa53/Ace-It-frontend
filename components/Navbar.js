import { useState } from 'react'
import Link from 'next/link'

function NavLink({to, children}) {
    return <Link href={to}>
        {children}
    </Link >
}

function MobileNav({open, setOpen}) {
    return (
        <div className={`shadow-sm absolute z-50 top-0 left-0 h-screen w-screen bg-cyan-200 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
                <Link className="text-xl font-semibold" href="/">ACE-IT</Link >
            </div>
            <div className="flex flex-col ml-4">
                <Link  className="text-xl font-medium my-4" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Hot-Topics
                </Link >
                <Link  className="text-xl font-normal my-4" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Blog
                </Link >
                <Link  className="text-xl font-normal my-4" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                Unleashed Content Generator
                </Link >
                
            </div>  
        </div>
    )
}

export default function Navbar() {

    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center ">
            <MobileNav open={open} setOpen={setOpen}/> 
            <div className="w-3/12 flex items-center">
                <Link className="text-2xl font-semibold" href="/">ACE-IT</Link>
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex italic hover:text-green-500  mx-4 ">
                    <NavLink to="/Home">
                        Hot-Topics
                    </NavLink>
                </div>
                <div className="hidden md:flex italic hover:text-green-500 mx-4">
                    <NavLink to="/Blog">
                        Blog
                    </NavLink>
                </div>
                <div className="hidden md:flex italic hover:text-green-500 mx-4">
                    <NavLink to="/Unleashed Content Generator">
                        Unleashed Content Generator
                    </NavLink>
                </div>

                <div className="hidden md:flex italic hover:text-green-500 mx-4">
                  
                <div className="hidden md:flex ">
                </div>
            </div>
            </div>
        </nav>
    )
}