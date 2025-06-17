export default function BlogCard() {
    return (
        <div className="max-w-sm rounded-xl shadow-2xl overflow-hidden bg-white relative">
            <img src={'https://plus.unsplash.com/premium_photo-1682434403587-1313db01ed02?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="Event Card"  className="px-5 mt-5 "/>
            <div className="p-4 space-y-2">
    <h3 className="text-sm font-semibold text-gray-900 leading-snug">
      BestSeller Book Bootcamp – write, Market & Publish Your Book - Lucknow
    </h3>

    <p className="text-sm text-[#7848F4] font-semibold">
      Saturday, March 18, 9.30PM
    </p>

    <p className="text-xs text-gray-500 font-medium">
      ONLINE EVENT – Attend anywhere
    </p>
  </div>
        </div>
    );
}