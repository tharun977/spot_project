from django.urls import path
from .views import (
    UserListCreateView,
    ParkingPlaceListCreateView,
    ParkingLotListCreateView,
    ParkingDetailsListCreateView,
    PaymentListCreateView,
    LogListCreateView,
    VehicleTypeListCreateView,
)

urlpatterns = [
    path("users/", UserListCreateView.as_view(), name="user-list"),
    path("parking-places/", ParkingPlaceListCreateView.as_view(), name="parking-place-list"),
    path("parking-lots/", ParkingLotListCreateView.as_view(), name="parking-lot-list"),
    path("parking-details/", ParkingDetailsListCreateView.as_view(), name="parking-detail-list"),
    path("payments/", PaymentListCreateView.as_view(), name="payment-list"),
    path("logs/", LogListCreateView.as_view(), name="log-list"),
    path("vehicle-types/", VehicleTypeListCreateView.as_view(), name="vehicle-type-list"),
]
