import { Link } from "react-router-dom";

export default function TripCard({ trip }) {
  return (
    <>
      <Link to={`/view-trip/${trip?.id}`}>
        <div className="border border-gray-300 rounded-xl p-3 hover:scale-105 transition-all">
          <img
            src="/placeholder.webp"
            alt=""
            className="object-cover rounded-xl  w-full"
          />
          <div className="mt-2">
            <h2 className="font-bold text-lg">{trip?.tripData?.location}</h2>
            <h2 className="font-sm text-gray-500">
              {trip?.userSelection?.noOfDays} Day/Days trip with{" "}
              {trip?.userSelection?.budget} budget
            </h2>
          </div>
        </div>
      </Link>
    </>
  );
}
