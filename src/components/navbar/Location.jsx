import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Location = () => {
  const [location, setLocation] = useState("Fetching location...");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;

        try {
          const res = await axios.get(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          );

          const data = res.data;
          
          const area = `${data.city || data.locality || "Area not found"}, ${data.principalSubdivision || ""}, ${data.countryName || ""}`;
          setLocation(area);
        } catch (error) {
          setLocation("Failed to fetch area.")
         
        }
      },
      (err) => {
        setLocation("Error: " + err.message);
      }
    );
  }, []);

  return<div className="p-6 text-xl max-sm:hidden">{location}</div>

};

export default Location;
