import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  //Importing for dialog box
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import {
  FaArrowRightFromBracket,
  FaArrowRightToBracket,
} from "react-icons/fa6";
import axios from "axios";

export default function Header() {
  const [openDialog, setopenDialog] = useState(false);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  useEffect(() => {
    console.log(user);
  }, [user]);

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
        window.location.reload();
      });
  };

  const login = useGoogleLogin({
    onSuccess: (credentialResponse) => getUserProfile(credentialResponse),
    onError: (error) => console.log(error),
  });

  const handleLogout = () => {
    googleLogout();
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/";
  };

  return (
    <>
      <div className="p-3 shadow-md flex justify-between items-center px-5">
        <a href="/">
          <img src="/logo.svg" alt="Logo" className="w-40 h-auto" />
        </a>
        <div>
          {user ? (
            <div className="flex items-center gap-5">
              <a href="/create-trip">
                <Button className="rounded-full border border-gray-300 hover:bg-gray-100">
                  Create Trip +
                </Button>
              </a>
              <a href="/my-trips">
                <Button className="rounded-full border border-gray-300 hover:bg-gray-100">
                  My Trips
                </Button>
              </a>
              <Popover>
                <PopoverTrigger>
                  <img
                    src={user.picture}
                    alt="User"
                    className="h-[39px] w-[39px] rounded-full border border-gray-300 hover:shadow-md"
                  />
                </PopoverTrigger>
                <PopoverContent className="bg-white shadow-lg p-4 rounded-lg w-64 flex flex-col items-center text-center">
                  <img
                    src={user.picture}
                    alt="User"
                    className="h-[50px] w-[50px] rounded-full border border-gray-300 shadow-sm mb-2"
                  />
                  <h2 className="text-lg font-semibold">{user.name}</h2>
                  <p className="text-sm text-gray-500">{user.email}</p>
                  <Button
                    variant="ghost"
                    className="mt-3 text-white hover:bg-red-700 hover:text-white w-full bg-red-500"
                    onClick={handleLogout}
                  >
                    Logout <FaArrowRightFromBracket />
                  </Button>
                </PopoverContent>
              </Popover>
            </div>
          ) : (
            <Button
              variant="dark"
              className="font-light"
              onClick={() => setopenDialog(true)}
            >
              Sign In{" "}
              <FaArrowRightToBracket className="font-extralight text-gray-300" />
            </Button>
          )}
        </div>
        <Dialog open={openDialog} onOpenChange={setopenDialog}>
          <DialogContent className="max-w-md p-6 bg-white rounded-lg shadow-lg">
            <DialogHeader>
              <DialogDescription>
                <img src="/logo1.svg" />
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
