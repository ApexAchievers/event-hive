import { Link, useNavigate } from "react-router";
import useSWR from "swr";
import { apiFetcher } from "../api/client";

export default function Navbar() {

const {data} = useSWR('/users/profile', apiFetcher);
const navigate = useNavigate();


    const logout = () => {
      localStorage.removeItem("ACCESS_TOKEN");
      navigate("/login")
    }

    return (
        <nav className="flex flex-row justify-between px-12 py-4">
      <h1 className="space-x-1">
       <Link to={'/'} className="text-black font-bold text-2xl">Event</Link>
        <span className="text-[#7848F4] font-bold text-2xl">Hive</span>
      </h1>

      <div>
        <h1>{data?.data?.name || "Unknown User"}</h1> 
        <button onClick={logout}>Logout</button>
      </div>
      

      <div className=" space-x-5 inline-block ">
        <Link to={'login'} className="font-bold ">Login </Link>
        <Link to={'/register'} className="bg-[#7848F4] text-white px-7 py-2 rounded-sm">Signup</Link>
      </div>
    </nav>
    );
}