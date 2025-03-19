import { db } from "@/service/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import TripInfo from "../components/TripInfo";
import Hotels from "../components/Hotels";
import Iternaries from "../components/Iternaries";
import Footer from "../components/Footer";

export default function ViewTrip() {
  const { tripId } = useParams();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    tripId && getTripData();
  }, [tripId]);

  //Used to get the trip data from the firestore
  const getTripData = async () => {
    const docRef = doc(db, "aiTrips", tripId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setTrip(docSnap.data());
    } else {
      console.log("No such document!");
      toast.error("No Trip Found");
    }
  };
  return (
    <>
      <div className="p-10 md:px-20 lg:px-44 xl:px-56 gap-10">
        {/* Information Section */}
        {!trip ? <p>Loading...</p> : <TripInfo trip={trip} />}

        {/* Hotels */}
        <Hotels trip={trip} />

        {/* Daily Plan  */}
        <Iternaries trip={trip} />

        <Footer />
      </div>
    </>
  );
}
