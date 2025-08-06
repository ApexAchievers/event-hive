import { imageBaseURL } from '..//api/client';

export default function CollegeCard({ college }) {

  return (
    <div className="max-w-sm rounded-xl shadow-2xl overflow-hidden bg-white relative">
      <img
        src={`${imageBaseURL}/${college.image}`}
        alt={college.name}
        className="rounded-[10px]"
      />

      <div className="p-4">
        <h1 className="text-lg font-semibold">{college.name}</h1>
        <h2 className="text-sm font-semibold py-8">
          {college.address}
        </h2>
      </div>
    </div>
  );
}
