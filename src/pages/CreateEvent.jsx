import Navbar from "../components/Navbar";

export default function CreateEvent() {
    return (
        <>
            <Navbar />
            <section className="bg-gray-50 flex items-center justify-center min-h-screen">
                <div className="max-w-4xl w-full mx-auto px-6 py-12 bg-white shadow-md rounded-lg">
                    <h1 className="text-3xl text-center font-bold mb-8">Create Event</h1>
                    <form className="space-y-8">
                        <div className="mb-4">
                            <label className="block font-medium mb-2">Event Title</label>
                            <input type="text" className="w-full p-3 border border-gray-300 rounded-lg text-gray-600" placeholder="Enter event title" />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1 font-medium">Event Venue</label>
                            <input type="text" placeholder="Enter event venue" className="w-full p-3 border border-gray-300 rounded-lg text-gray-600" />
                        </div>
                        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block mb-1 font-medium">Start time</label>
                                <input type="time" placeholder="Start time" className="w-full p-3 border border-gray-300 rounded-lg text-gray-600" />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">End time</label>
                                <input type="time" placeholder="End time" className="w-full p-3 border border-gray-300 rounded-lg text-gray-600" />
                            </div>
                        </div>
                        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block mb-1 font-medium">Start date</label>
                                <input type="date" placeholder="Start date" className="w-full p-3 border border-gray-300 rounded-lg text-gray-600" />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">End date</label>
                                <input type="date" placeholder="End date" className="w-full p-3 border border-gray-300 rounded-lg text-gray-600" />
                            </div>
                        </div>
                        <h2 className="text-2xl font-semibold text-center mt-12">Event Description</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Event Image</label>
                            <div className="w-full h-50 bg-gray-100 rounded-md flex items-center justify-center text-gray-400 mb-4">
                                <span>Upload Image</span>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Event Description</label>
                            <textarea placeholder="Type here..." className="w-full h-35 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
                        </div>
                        <div className="mb-4">
                            <button type="submit" className=" w-full bg-primary text-white font-semibold py-3 px-8 rounded-md hover:bg-purple-500 cursor-pointer transition duration-200">Create event
                            </button>
                        </div>

                    </form>
                </div>
            </section>
        </>
    );
}