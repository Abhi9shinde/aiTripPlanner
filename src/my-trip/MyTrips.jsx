import { db } from "@/service/FirebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";
import { toast } from "sonner";
import TripCard from "./components/TripCard";
import Footer from "@/view-trip/components/Footer";

export default function MyTrips() {
  const navigation = useNavigation();

  const [userTrips, setUserTrips] = useState([]);

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
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      setUserTrips((prevVal) => [...prevVal, doc.data()]);
    });
  };

  return (
    <>
      <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
        <h2 className="font-bold text-3xl">My Trips</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-10">
          {userTrips?.length > 0
            ? userTrips.map((trip, index) => (
                <TripCard trip={trip} key={index} />
              ))
            : [1, 2, 3, 4, 5, 6].map((item, index) => (
                <div
                  key={index}
                  className="h-[250px] w-full bg-slate-200 rounded-xl animate-pulse"
                >
                  {" "}
                </div>
              ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
