// src/pages/customer/DiningTablePage.tsx

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { restaurants } from "@/store/restaurants";

const DiningTablePage = () => {
  const { restaurantCode, tableGroup, tableNumber } = useParams();
  const [restaurantName, setRestaurantName] = useState<string>("");
  useEffect(() => {
    // Optional: validate or fetch initial data
    const restaurantDetails = restaurants.find(
      ({ code }) => restaurantCode === code
    );
    if (restaurantDetails) {
      setRestaurantName(restaurantDetails.name);
    }
    console.log("Dining Table Details:", restaurantDetails);
  }, [restaurantCode, tableGroup, tableNumber]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Welcome to {restaurantName}</h1>
      <p className="flex gap-2">
        You are seated at table <strong>{tableNumber}</strong> in group
        <strong>{tableGroup}</strong>.
      </p>
      {/* ⬇ Menu / Order functionality can follow here */}
    </div>
  );
};

export default DiningTablePage;
