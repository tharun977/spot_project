import React, { useState, useEffect } from "react";
import { getParkingStatus } from "../api";

function ParkingStatus() {
  const [parkingDetails, setParkingDetails] = useState([]);

  useEffect(() => {
    const fetchParkingStatus = async () => {
      const response = await getParkingStatus();
      setParkingDetails(response.data);
    };
    fetchParkingStatus();
  }, []);

  return (
    <div>
      <h2>Parking Status</h2>
      <ul>
        {parkingDetails.map((detail) => (
          <li key={detail.parking_id}>
            Lot: {detail.lot_id}, Vehicle: {detail.vehicle_reg_no}, Status:{" "}
            {detail.out_time ? "Exited" : "Parked"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ParkingStatus;
