import BlogCard from "./BlogCard";

export default function OurBlogs() {
    return (
        <section className="mt-20 w-[90%] mx-auto">
            <div className="order-1 flex-grow">
                <h1 className="space-x-2 text-left">
                <span className="text-black font-bold text-3xl" >Our</span>
                <span className="text-[#7848F4] font-bold text-3xl">Blogs</span>
            </h1>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {[1, 2, 3].map(n => <BlogCard key={n} />)}
            </div>
        </section>
    );
}