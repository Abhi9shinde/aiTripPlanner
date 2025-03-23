import { Button } from "@/components/ui/button";
import "./App.css";
import Hero from "./components/custom/Hero";
import { useState, useEffect } from "react";
import Loader from "./components/custom/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader for 2 seconds, even if page loads instantly
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);
  return (
    <>
      {loading ? (
        // Full-page loader
        <div className="fixed inset-0 flex items-center justify-center bg-white/75 backdrop-blur-md z-50">
          <Loader />
        </div>
      ) : (
        <Hero />
      )}
    </>
  );
}

export default App;
