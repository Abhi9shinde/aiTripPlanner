import { RiAlignItemBottomFill } from "react-icons/ri";
import PlaceCard from "./PlaceCard";
import { Bold } from "lucide-react";

export default function Iternaries({ trip }) {
  return (
    <>
      <div>
        <h2 className="font-bold text-lg mt-4">Places to Visit</h2>
        <div className="mt-5">
          {Object.entries(trip?.tripData?.itinerary || {}).map(
            ([day, details]) => {
              const formattedDay = `Day ${day.replace("day", "")}`; // Convert "day1" to "Day 1"
              return (
                <div key={day}>
                  <h2 className="font-bold text-lg mb-2">{formattedDay}</h2>
                  <span>
                    <strong> Time:</strong> &nbsp;
                    <strong className="font-bold text-sm text-orange-500">
                      {details.bestTimeToVisit}
                    </strong>
                  </span>
                  <br />
                  <span>
                    <strong> Theme:</strong> &nbsp;
                    <strong className="font-bold text-sm text-orange-500">
                      {details.theme}
                    </strong>
                  </span>
                  <div className="grid md:grid-cols-2 gap-5">
                    {details.activities?.map((place, index) => (
                      <div className="my-5">
                        <PlaceCard place={place} />
                      </div>
                    ))}
                  </div>
                  {/* <p>Theme: {details.theme}</p>
                  <p>Best Time: {details.bestTimeToVisit}</p> */}
                </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
}
