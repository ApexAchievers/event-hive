import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventDetail from "../components/EventDetail";
import SimilarEvents from "../components/SimilarEvents";

export default function ViewEvent() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50">
                <EventDetail />
                <SimilarEvents />
            </div>
            <Footer />
        </>
    );
}