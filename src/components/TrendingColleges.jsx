import CollegeCard from "./CollegeCard";

export default function TrendingColleges() {
    return (
        <section className="mt-20 w-[90%] mx-auto">
            <div className="order-1 flex-grow" >
                <h1 className="space-x-2 text-left">
                <span className="text-black font-bold text-3xl">Trending</span>
                <span className="text-[#7848F4] font-bold text-3xl">colleges</span>
            </h1>
            </div>



            <div className="grid grid-cols-3 gap-5">
                {[1, 2, 3].map(n => <CollegeCard key={n} />)}
            </div>
            <div>
                <button>Load more...</button>
            </div>
        </section>
    );
}