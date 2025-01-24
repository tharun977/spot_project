import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api";

export const api = axios.create({
  baseURL: BASE_URL,
});

export const getUsers = () => api.get("/users/");
export const createUser = (data) => api.post("/users/", data);

export const getParkingPlaces = () => api.get("/parking-places/");
export const bookParking = (data) => api.post("/parking-details/", data);

export const getVehicleTypes = () => api.get("/vehicle-types/");
export const registerVehicle = (data) => api.post("/vehicle-types/", data);

export const getPayments = () => api.get("/payments/");
export const makePayment = (data) => api.post("/payments/", data);
