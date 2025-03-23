import { Link } from "react-router-dom";

export default function TripCard({ trip }) {
  if (!trip?.userSelection) return null;

  return (
    <Link to={`/view-trip/${trip?.id}`}>
      <div className="card-card border-foreground/20 p-1 h-full flex flex-col gap-3">
        <div className="img relative h-full rounded-lg overflow-hidden duration-500 group">
          <img
            src={trip?.image || "/placeholder.webp"}
            className="h-56 w-full object-cover group-hover:scale-110 duration-500 transition-all"
            alt={trip?.userSelection.location || "Trip Image"}
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-2xl font-oswald font-extralight">
              {trip?.userSelection.location || "Unknown Location"}
            </span>
            <span className="text-white text-2xl font-oswald font-extralight">
              {trip?.userSelection.noOfDays}{" "}
              {trip?.userSelection.noOfDays > 1 ? "Days" : "Day"}
            </span>
            <span className="text-white text-2xl font-oswald font-extralight">
              {trip?.userSelection.budget || "Unknown"} Budget
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
