import { db } from "@/service/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import TripInfo from "../components/TripInfo";
import Hotels from "../components/Hotels";
import Iternaries from "../components/Iternaries";
import Loader from "../../components/custom/Loader"; // Adjust path if needed

export default function ViewTrip() {
  const { tripId } = useParams();
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (tripId) {
      getTripData();
    }
  }, [tripId]);

  // Fetch trip data from Firestore
  const getTripData = async () => {
    const docRef = doc(db, "aiTrips", tripId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setTrip(docSnap.data());
    } else {
      toast.error("No Trip Found");
    }
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white/75 backdrop-blur-md z-50">
          <Loader />
        </div> // Show custom loader while fetching data
      ) : (
        <div className="p-10 md:px-20 lg:px-44 xl:px-56 gap-10">
          {/* Information Section */}
          <TripInfo trip={trip} />

          {/* Hotels */}
          <Hotels trip={trip} />

          {/* Daily Plan  */}
          <Iternaries trip={trip} />
        </div>
      )}
    </>
  );
}
