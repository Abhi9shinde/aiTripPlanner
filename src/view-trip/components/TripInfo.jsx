import { Button } from "@/components/ui/button";
import { CiShare1 } from "react-icons/ci";

export default function TripInfo({ trip }) {
  return (
    <>
      <img
        src="/placeholder.webp"
        alt=""
        className="h-[340px] w-full object-cover rounded-xl"
        style={{ objectPosition: "0px -500px" }}
      />

      <div className="flex justify-between items-center mt-3">
        <div className="my-5 flex flex-col gap-2">
          <h2 className="font-bold text-2xl">
            {trip?.tripData?.location || "Unknown Location"}
          </h2>
          <div className="flex flex-row gap-5">
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-sm">
              📅 {trip?.userSelection?.noOfDays} Day/Days
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-sm">
              💰 {trip?.userSelection?.budget} Budget
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-sm">
              🫂 No. of travellers: {trip?.userSelection?.traveler}
            </h2>
          </div>
        </div>
        <Button variant="dark">
          <CiShare1 className="!h-5 !w-5" />
        </Button>
      </div>
    </>
  );
}
