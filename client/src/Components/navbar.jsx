import { useState } from "react";

const Navbar = () => {
    let [menu, setMenu] = useState(false);
    return(
    <div className="navbar bg-slate-800 text-white p-5 w-full sm:w-full md:w-full lg:w-full mx-auto items-center lg:flex lg:justify-between">
        <h1 className="text-3xl lg:pl-20">Admin</h1>
        <div className="text-3x1 absolute right-12 top-8 cursor-pointer lg:hidden">
            <button onClick={() => setMenu(!menu)}>V</button>
        </div>
        <div className="navpages lg:pr-20">
            <ul className={`navlist list-none z-[-1]
            absolute w-full bg-slate-800 left-0
            transition-all duration-700 ease-in-out
            lg:flex lg:flex-nowrap lg:static lg:z-auto
            ${menu ? 'top-16':'top-[-490px]'}`}>
                <li className="cursor-pointer">Create</li>
                <li className="cursor-pointer">Read All</li>
                <li className="cursor-pointer">Read Once</li>
                <li className="cursor-pointer">Delete</li>
                <div className="logout">
                    <li className="cursor-pointer">Logout</li>
                </div>
            </ul>
        </div>
    </div>
    )
}

export default Navbar;