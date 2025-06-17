import BlogCard from "./BlogCard";

export default function OurBlogs() {
    return (
        <section className="mt-20 w-[90%] mx-auto py-10">
            <div className="ml-6 sm:ml-12 lg:ml-20">
        <h1 className="text-3xl font-bold mb-10">
          <span className="text-black">Our </span>
          <span className="text-primary">Blogs</span>
        </h1>
      </div>
            <div className="grid grid-cols-3 gap-5">
                {[1, 2, 3].map(n => <BlogCard key={n} />)}
            </div>
        </section>
    );
}