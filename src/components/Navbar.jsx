import { Link } from "react-router";

export default function Navbar() {
    return (
        <nav className="flex flex-row justify-between px-12 py-4">
      <h1 className="space-x-1">
       <Link to={'/'} className="text-black font-bold text-2xl">Event</Link>
        <span className="text-[#7848F4] font-bold text-2xl">Hive</span>
      </h1>

      <div className=" space-x-5 inline-block ">
        <Link to={'login'} className="font-bold ">Login </Link>
        <Link to={'/register'} className="bg-[#7848F4] text-white px-7 py-2 rounded-sm">Signup</Link>
      </div>
    </nav>
    );
}