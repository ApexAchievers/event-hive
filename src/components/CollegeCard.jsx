export default function CollegeCard() {
  return (
    <div className="max-w-sm rounded-xl shadow-2xl overflow-hidden bg-white relative">
      <img
        src={
          "https://images.unsplash.com/photo-1603437119287-4a3732b685f9?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="College Card"
        className="rounded-[10px]"
      />

      <div className="p-4">
        <h1 className="text-lg font-semibold">Harvard University</h1>
        <h2 className="text-sm font-semibold py-8">
          Cambridge, Massachusetts, UK
        </h2>
      </div>
    </div>
  );
}
