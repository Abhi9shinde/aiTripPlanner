import { Link } from "react-router-dom";
export default function Hotels({ trip }) {
  return (
    <>
      <h2 className="font-bold text-xl mt-5">Hotel Recommendation</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
        {trip?.tripData?.hotels?.map((hotel, index) => (
          <Link
            key={index}
            to={
              "https://www.google.com/maps/search/?api=1&query=" +
              hotel?.hotelName +
              "," +
              hotel?.hotelAddress
            }
            target="_blank"
          >
            <div className="hover:scale-105 transition-all cursor-pointer border p-4 rounded-lg shadow-md ">
              <img src="/placeholder.webp" alt="" className="rounded-lg" />
              <div className="my-3 flex flex-col gap-2">
                <h2 className="font-medium"> {hotel.hotelName}</h2>
                <h2 className="text-xs text-gray-500">
                  📍{hotel?.hotelAddress}
                </h2>
                <h2 className="text-sm">💰{hotel?.price} ₹</h2>
                <h2 className="text-sm">⭐{hotel?.rating} Stars</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
