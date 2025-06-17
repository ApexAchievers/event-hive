import EventCard from "./EventCard";

export default function UpcomingEvents() {
  return (
    <section className="mt-20 w-[90%] mx-auto">
      <div className="">
          <div className="flex flex-row justify-between items-center mt-20 flex-wrap gap-8 px-4  sm:px-16">
            {/* Heading - Left Side */}
            <div className="order-1 flex-grow">
              <h1 className="py-8 space-x-2 text-left">
                <span className="text-black font-bold text-3xl">Upcoming</span>
                <span className="text-[#7848F4] font-bold text-3xl">
                  Events
                </span>
              </h1>
            </div>

            {/* Dropdown Filters - Right Side */}
            <div className="flex flex-wrap py-6 px-4 pr-1 ml-auto gap-4 w-full sm:w-auto order-2 justify-end">
              {/* Weekday Dropdown */}
              <div className="relative px-4 py-4 w-full sm:w-auto">
                <select
                  name="day"
                  id="day"
                  className="block appearance-none w-full bg-[#687C940D] border border-transparent text-black py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-0 focus:border-transparent cursor-pointer text-base sm:text-lg"
                >
                  <option
                    disabled
                    selected
                    className="bg-[#687C940D] text-black"
                  >
                    Weekday
                  </option>
                  <option value="monday">Monday</option>
                  <option value="tuesday">Tuesday</option>
                  <option value="wednesday">Wednesday</option>
                  <option value="thursday">Thursday</option>
                  <option value="friday">Friday</option>
                  <option value="saturday">Saturday</option>
                  <option value="sunday">Sunday</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-6 flex items-center px-2 text-black">
                  <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                    <path
                      d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>

              {/* Event Type Dropdown */}
              <div className="relative px-4 py-4 w-full sm:w-auto">
                <select
                  name="event-type"
                  id="event-type"
                  className="block appearance-none w-full bg-[#687C940D] border border-transparent text-black py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-0 focus:border-transparent cursor-pointer text-base sm:text-lg"
                >
                  <option
                    disabled
                    selected
                    className="bg-[#687C940D] text-black"
                  >
                    Event type
                  </option>
                  <option value="drama">Drama</option>
                  <option value="tech">Tech</option>
                  <option value="memorial">Memorial</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-6 flex items-center px-2 text-black">
                  <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                    <path
                      d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>

              {/* Category Dropdown */}
              <div className="relative px-4 py-4 w-full sm:w-auto">
                <select
                  name="category"
                  id="category"
                  className="block appearance-none w-full bg-[#687C940D] border border-transparent text-black py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-0 focus:border-transparent cursor-pointer text-base sm:text-lg"
                >
                  <option
                    disabled
                    selected
                    className="bg-[#687C940D] text-black"
                  >
                    Any Category
                  </option>
                  <option value="colorful">Colorful</option>
                  <option value="happy">Happy</option>
                  <option value="sad">Sad</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-6 flex items-center px-2 text-black">
                  <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                    <path
                      d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        
      </div>

      <div className="grid grid-cols-3 gap-5">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <EventCard key={n} />
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
