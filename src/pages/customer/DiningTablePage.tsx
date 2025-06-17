// src/pages/customer/DiningTablePage.tsx

import { useParams } from "react-router-dom";
import { useEffect } from "react";

const DiningTablePage = () => {
  const { restaurantCode, tableGroup, tableNumber } = useParams();

  useEffect(() => {
    // Optional: validate or fetch initial data
    console.log("Dining Table Params:", {
      restaurantCode,
      tableGroup,
      tableNumber,
    });
  }, [restaurantCode, tableGroup, tableNumber]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Welcome to {restaurantCode}</h1>
      <p className="flex gap-2">
        You are seated at table <strong>{tableNumber}</strong> in group
        <strong>{tableGroup}</strong>.
      </p>
      {/* ⬇ Menu / Order functionality can follow here */}
    </div>
  );
};

export default DiningTablePage;
