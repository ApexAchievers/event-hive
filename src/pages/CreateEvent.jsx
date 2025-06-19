import Navbar from "../components/Navbar";
import useSWR from "swr";
import { apiFetcher, apiClient } from "../api/client";
import SubmitButton from "../components/SubmitButton";
import { useNavigate } from "react-router";
import(useNavigate)

export default function CreateEvent() {
    const navigate = useNavigate();
    const { data, isLoading, error } = useSWR("/colleges", apiFetcher);

    const postEvent = async (data) => {
        try {
            const response = await apiClient.post("/events", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
                }
            });
            console.log(response.data)
            navigate(`/view-event?id=${response.data.id}`);
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <>
            <Navbar />
            <section className="bg-gray-50 flex items-center justify-center min-h-screen">
                <div className="max-w-4xl w-full mx-auto px-6 py-12 bg-white shadow-md rounded-lg">
                    <h1 className="text-3xl text-center font-bold mb-8">Create Event</h1>
                    <form action={postEvent} className="space-y-8">
                        <div className="mb-4">
                            <label className="block font-medium mb-2"> Select College</label>
                            <select className="w-full p-3 border border-gray-300 rounded-lg text-gray-600" name="college" id="" >
                                {isLoading ? <option value="">loading...</option> :
                                    error ? <option value="">something went wrong...</option> :
                                        data.data.map((college) => {
                                            return <option key={college.id} value={college.id}>{college.name}</option>
                                        })}
                            </select>


                        </div>
                        <div className="mb-4">
                            <label className="block font-medium mb-2">Event Title</label>

                            <input type="text" name="title" id="text" placeholder="Enter your mail" className="w-full p-3 border border-gray-300 rounded-lg text-gray-600" />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1 font-medium">Event Venue</label>

                            <select name="venue" id="Location" className="w-full p-3 border border-gray-300 rounded-lg text-gray-600" >
                                <option selected disabled>Choose event type</option>
                                <option value="accra">Accra</option>
                                <option value="Tema">Tema</option>
                            </select>
                        </div>
                        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-6">

                        </div>
                        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block mb-1 font-medium">Start date</label>
                                <input type="datetime-local" name="start" placeholder="date" className="w-full p-3 border border-gray-300 rounded-lg text-gray-600" />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">End date</label>
                                <input type="datetime-local" name="end" id="date" placeholder="date" className="w-full p-3 border border-gray-300 rounded-lg text-gray-600" />
                            </div>
                        </div>

                        <div className="mb-4">
                            <h1>Event Image</h1>
                            <input type="file" name="image" id="image" accept="image*/"
                            className="w-full h-50 bg-gray-100 rounded-md flex items-center justify-center text-gray-400 mb-4" />
                            </div>

                        
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Event Description</label>
                            <input type="text" name="description" id="text"  className="w-full h-35 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"/>
                           

                            <label className="block text-gray-700 mb-2">Event Tags</label>
                            <select multiple name="tags" id="" className="w-full h-35 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                                <option value="social">Social</option>
                                <option value="fun-fair">Fun-Fair</option>
                                <option value="education">Education</option>
                                <option value="business">Business</option>
                                <option value="party">Party</option>
                            </select>
                        </div>


                        <div className="mb-4">
                            <SubmitButton className=" w-full bg-primary text-white font-semibold py-3 px-8 rounded-md hover:bg-purple-500 cursor-pointer transition duration-200" title={"Create event"} />
                        </div>


                    </form>
                </div>
            </section>
        </>
    );
}