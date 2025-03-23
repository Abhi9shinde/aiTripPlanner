import { db } from "@/service/FirebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";
import { toast } from "sonner";
import TripCard from "./components/TripCard";
import Footer from "@/view-trip/components/Footer";
import Loader from "../components/custom/Loader"; // Adjust path if needed

export default function MyTrips() {
  const navigation = useNavigation();
  const [userTrips, setUserTrips] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    getUserTrips();
  }, []);

  const getUserTrips = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigation("/");
      toast.error("Please login to view your trips");
      return;
    }
    setUserTrips([]);
    const q = query(
      collection(db, "aiTrips"),
      where("userEmail", "==", user?.email)
    );
    const querySnapshot = await getDocs(q);
    const trips = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      trips.push(doc.data());
    });

    setUserTrips(trips);
    setLoading(false); // Set loading to false after fetching data
  };

  return (
    <>
      <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
        <h2 className="font-bold text-3xl">My Trips</h2>

        {loading ? (
          <div className="fixed inset-0 flex items-center justify-center bg-white/75 backdrop-blur-md z-50">
            <Loader />
          </div> // Show loader while fetching data
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-10">
            {userTrips.length > 0 ? (
              userTrips.map((trip, index) => (
                <TripCard trip={trip} key={index} />
              ))
            ) : (
              <p className="text-gray-500">No trips found.</p>
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
