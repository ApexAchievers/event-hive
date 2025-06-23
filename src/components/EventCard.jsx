import { imageBaseURL } from "../api/client";
import { Link } from "react-router";


export default function EventCard({event}) {
    return (
        <div className="max-w-sm rounded-xl shadow-2xl overflow-hidden bg-white relative">
            <img src={`${imageBaseURL}/${event.image}`} alt="Event Card" className="px-5 mt-5" />

            <div className="p-4">
                <Link to={`/view-event?id=${event.id}`} className="text-lg font-semibold text-gray-800 mb-2">{
            event.title}</Link>
                <h2 className="text-primary px-2 mt-4">Saturday, March 18, 9.30PM</h2>
                <h3 className="text-gray-500 px-2 mt-3">ONLINE EVENT - Attend anywhere</h3>
            </div>
        </div>
    );
}