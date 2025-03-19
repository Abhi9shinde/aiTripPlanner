import { Button } from "@/components/ui/button";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function PlaceCard({ place }) {
  return (
    <>
      <Link
        to={
          "https://www.google.com/maps/search/?api=1&query=" + place?.placeName
        }
        target="_blank"
      >
        <div className="border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-transform hover:shadow-sm cursor-pointer ">
          <img
            src="/placeholder.webp"
            alt=""
            className="w-[150px] h-[150px] rounded-xl"
          />
          <div>
            <h2 className="font-medium text-lg">{place.placeName}</h2>
            <p className="text-sm text-gray-500">{place.placeDetails}</p>
            <p className="text-[14px] mt-3">⌚{place.travelTime}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
