import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete"; //api is paid
import { Input } from "@/components/ui/input";
import {
  AI_PROMPT,
  SelectBudgetOptions,
  SelectTravelesList,
} from "../constants/Options"; //importing budget options
import {
  //Importing for dialog box
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { chatSession } from "@/service/AiModel";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/service/FirebaseConfig";
import { useNavigate } from "react-router-dom";

export default function CreateTrip() {
  const [place, setplace] = useState();
  //because we are implementing a form below so need to save the data
  const [formData, setformData] = useState({});

  //open dialogue box for authentication login singup
  const [openDialog, setopenDialog] = useState(false);

  const [loading, setloading] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    //Storing data using this func
    setformData({ ...formData, [name]: value });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const OnGenerateTrip = async () => {
    const user = localStorage.getItem("user");

    if (!user) {
      setopenDialog(true);
      return;
    }
    //Error Checking
    if (!formData?.location || !formData?.budget || !formData?.traveler) {
      toast.error("!!!! Please fill all the fields");
      return;
    }
    if (formData?.noOfDays >= 7) {
      toast.error("!!!! Please enter a valid number of days");
      return;
    }

    setloading(true);
    //AI PROMPT UPDATE
    const FINAL_PROMPT = AI_PROMPT.replace("{location}", formData?.location)
      .replace("{budget}", formData?.budget)
      .replace("{totalDays}", formData?.noOfDays)
      .replace("{traveler}", formData?.traveler)
      .replace("{totalDays}", formData?.noOfDays);

    //API CALL
    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log(result?.response?.text());
    //Save trip data in firebase
    setloading(false);
    saveTripData(result?.response?.text());
  };

  //Save trip data in firebase
  const saveTripData = async (tripData) => {
    setloading(true);
    const user = JSON.parse(localStorage.getItem("user"));
    const docId = Date.now().toString();
    await setDoc(doc(db, "aiTrips", docId), {
      userSelection: formData,
      tripData: JSON.parse(tripData),
      userEmail: user?.email,
      id: docId,
    });
    setloading(false);
    navigate(`/view-trip/${docId}`);
    toast.success("Trip Generated Successfully");
  };

  //Login function
  const login = useGoogleLogin({
    onSuccess: (credentialResponse) => getUserProfile(credentialResponse),
    onError: (error) => console.log(error),
  });

  //Get User Profile
  const getUserProfile = (token_info) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token_info?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${token_info?.access_token}`,
            Accept: "Application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res?.data));
        setopenDialog(false);
        OnGenerateTrip();
      });
  };

  return (
    <>
      {/* Heading */}
      <div className="px-5 mt-10 sm:px-10 md:px-32 lg:px-56 xl:px-72">
        <h2 className="font-bold text-3xl">
          Tell us your travel preference 🌍✈️🌴
        </h2>
        <p className="mt-3 text-gray-500 text-xl">
          Just provide some basic information, and our trip planner will
          generate a customised itinerary based on your preferences
        </p>

        <div className="mt-20 flex flex-col gap-10">
          {/* Destination Choice Section*/}
          <div>
            <h2 className="text-xl my-3 font-medium">
              What is your destination of choice ✈️?
            </h2>
            <Input
              placeholder={"Ex. Mumbai,India"}
              type="text"
              onChange={(v) => {
                setplace(v);
                // console.log(v.target.value);
                handleInputChange("location", v.target.value);
              }}
            />
            {/* GoogleAutoCompleteError API IS PAID */}
            {/* <GooglePlacesAutocomplete
						apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
						libraries={["places_new"]} // ✅ Use "places_new" instead of "places"
						selectProps={{
								value: place,
								onChange: (v) => {
								setplace(v);
								console.log("Selected Place:", v);
								},
						}}
						/> */}
          </div>
          {/* Duration*/}
          <div>
            <h2 className="text-xl my-3 font-medium">
              How many days are you planning your trip?
            </h2>
            <Input
              placeholder={"Ex.3"}
              type="number"
              min={0}
              onChange={(v) => {
                // console.log(v.target.value);
                handleInputChange("noOfDays", v.target.value);
              }}
            />
          </div>
          {/* Decide Budget Section
						Here we have used the imported budget options */}
          <div>
            <h2 className="text-xl my-3 font-medium">What is your Budget?</h2>
            <div className="grid grid-cols-3 gap-5 mt-5">
              {SelectBudgetOptions.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleInputChange("budget", item.title)}
                  className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer
										${formData?.budget === item.title ? "shadow-lg border-black" : ""}`}
                >
                  <h2 className="text-4xl">{item.icon}</h2>
                  <h2 className="font-bold text-lg">{item.title}</h2>
                  <h2 className="text-sm text-gray-400">{item.desc}</h2>
                </div>
              ))}
            </div>
          </div>
          {/* Number of members */}
          <div>
            <h2 className="text-xl my-3 font-medium">
              Who do you plan on travelling with on your adventure?
            </h2>
            <div className="grid grid-cols-3 gap-5 mt-5">
              {SelectTravelesList.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleInputChange("traveler", item.people)}
                  className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer ${
                    formData?.traveler === item.people
                      ? "shadow-lg border-black"
                      : ""
                  }`}
                >
                  <h2 className="text-4xl">{item.icon}</h2>
                  <h2 className="font-bold text-lg">{item.title}</h2>
                  <h2 className="text-sm text-gray-400">{item.desc}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="my-10 justify-end flex">
          <Button variant="dark" onClick={OnGenerateTrip} disabled={loading}>
            {loading ? (
              <AiOutlineLoading3Quarters className="h-7 w-7 animate-spin" />
            ) : (
              "Generate Trip"
            )}
          </Button>
        </div>

        <Dialog open={openDialog} onOpenChange={setopenDialog}>
          <DialogContent className="max-w-md p-6 bg-white rounded-lg shadow-lg">
            <DialogHeader>
              <DialogDescription>
                <img src="/logo.svg" />
                <h2 className="font-bold text-lg mt-7">Sign In with Google</h2>
                <p>Sign In to the App with Google Authentication securely</p>
                <Button
                  variant="dark"
                  className="w-full mt-7 flex gap-2 items-center"
                  onClick={login}
                >
                  <FcGoogle className="!h-6 !w-6" />
                  Sign In with Google
                </Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
