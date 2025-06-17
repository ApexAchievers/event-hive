import CollegeCard from "./CollegeCard";

export default function TrendingColleges() {
  return (
    <section className="mt-20 w-[90%] mx-auto">
      <div className="ml-6 sm:ml-12 lg:ml-20">
        <h1 className="text-3xl font-bold mb-10">
          <span className="text-black">Trending </span>
          <span className="text-[#7848F4]">colleges</span>
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {[1, 2, 3].map((n) => (
          <CollegeCard key={n} />
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
