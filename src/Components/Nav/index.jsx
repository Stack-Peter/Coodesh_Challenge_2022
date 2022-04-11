import React from "react";
import notFoundImg from './img/notFound.png'
import UserIcon from './Components/UserIcon'

const Nav = () => {
  return (
    <nav className="flex justify-between h-16 bg-slate-50">
      <div className="flex ml-6 py-2 items-center">
        <img src={notFoundImg} className="h-[52px]" alt="not found img" />
        <span className="ml-3 font-bold text-lg">Phama Inc.</span>
      </div>
      <div className="mr-6 bg-slate-200 self-center p-4 rounded-full">
        <UserIcon />
      </div>
    </nav>
  )
}

export default Nav