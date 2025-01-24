import React, { useState, useEffect } from "react";
import { getParkingPlaces, bookParking } from "../api/api";

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
    <form onSubmit={handleBooking} className="p-4 max-w-md mx-auto bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Book Parking</h2>
      <select
        className="border p-2 mb-2 w-full"
        value={selectedPlace}
        onChange={(e) => setSelectedPlace(e.target.value)}
      >
        <option value="">Select Parking Place</option>
        {parkingPlaces.map((place) => (
          <option key={place.place_id} value={place.place_id}>
            {place.place_name}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Vehicle Registration No"
        className="border p-2 mb-2 w-full"
        value={vehicleRegNo}
        onChange={(e) => setVehicleRegNo(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Book</button>
    </form>
  );
}

export default ParkingBooking;
