import React, { useState, useEffect } from "react";
import { getParkingPlaces, bookParking } from "../api";

function ParkingBooking() {
  const [parkingPlaces, setParkingPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState("");
  const [vehicleRegNo, setVehicleRegNo] = useState("");

  useEffect(() => {
    const fetchParkingPlaces = async () => {
      const response = await getParkingPlaces();
      setParkingPlaces(response.data);
    };
    fetchParkingPlaces();
  }, []);

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      await bookParking({ lot_id: selectedPlace, vehicle_reg_no: vehicleRegNo });
      alert("Parking booked successfully!");
    } catch (error) {
      console.error("Error booking parking:", error);
    }
  };

  return (
    <div>
      <h2>Book Parking Spot</h2>
      <form onSubmit={handleBooking}>
        <select value={selectedPlace} onChange={(e) => setSelectedPlace(e.target.value)}>
          <option value="">Select Parking Place</option>
          {parkingPlaces.map((place) => (
            <option key={place.place_id} value={place.place_id}>
              {place.place_name}
            </option>
          ))}
        </select>
        <br />
        <input
          type="text"
          placeholder="Vehicle Registration Number"
          value={vehicleRegNo}
          onChange={(e) => setVehicleRegNo(e.target.value)}
        />
        <br />
        <button type="submit">Book</button>
      </form>
    </div>
  );
}

export default ParkingBooking;
