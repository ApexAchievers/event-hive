import EventCard from "./EventCard";

export default function CollegeEvents() {
    return (
        <section className="mt-20 w-[90%] mx-auto">
            <div className="text-left mb-8">
                <h1 className="text-2xl md:text-3xl font-bold ">
                    <span className="text-gray-600 mr-2">College</span>
                    <span className="text-purple-800">Events</span>
                </h1>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {[1, 2, 3, 4, 5, 6].map(n => <EventCard key={n} />)}
            </div>
        </section>
    );
}