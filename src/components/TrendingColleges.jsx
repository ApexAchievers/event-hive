import CollegeCard from "./CollegeCard";
import useSWR from "swr";
import { apiFetcher } from '../api/client';
import { ClipLoader } from "react-spinners";

export default function TrendingColleges() {
  const { data, error, isLoading } = useSWR("/colleges?limit=3&skip=3", apiFetcher);
 

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <ClipLoader size={100} />
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex justify-center">
        <p className="text-xl">Something went wrong</p>
      </div>
    );
  }

  return (
    <section className="mt-20 w-[90%] mx-auto">
      <div className="ml-6 sm:ml-12 lg:ml-20">
        <h1 className="text-3xl font-bold mb-10">
          <span className="text-black">Trending </span>
          <span className="text-[#7848F4]">colleges</span>
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {data.data.map((college) => (
          <CollegeCard key={college.id} college={college} />
        ))}
      </div>
      <div className="flex justify-center mt-10 ">
        <button className="bg-primary text-white px-6 py-2 rounded-lg text-sm hover:bg-[#6633cc] transition">
          Load more...
        </button>
      </div>
    </section>
  );
}
