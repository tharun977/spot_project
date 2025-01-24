from rest_framework import generics
from .models import User, ParkingPlace, ParkingLot, ParkingDetails, Payment, Log, VehicleType
from .serializers import (
    UserSerializer, ParkingPlaceSerializer, ParkingLotSerializer,
    ParkingDetailsSerializer, PaymentSerializer, LogSerializer, VehicleTypeSerializer
)

class UserListCreateView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ParkingPlaceListCreateView(generics.ListCreateAPIView):
    queryset = ParkingPlace.objects.all()
    serializer_class = ParkingPlaceSerializer

class ParkingLotListCreateView(generics.ListCreateAPIView):
    queryset = ParkingLot.objects.all()
    serializer_class = ParkingLotSerializer

class VehicleTypeListCreateView(generics.ListCreateAPIView):
    queryset = VehicleType.objects.all()
    serializer_class = VehicleTypeSerializer

class ParkingDetailsListCreateView(generics.ListCreateAPIView):
    queryset = ParkingDetails.objects.all()
    serializer_class = ParkingDetailsSerializer

class PaymentListCreateView(generics.ListCreateAPIView):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer

class LogListCreateView(generics.ListCreateAPIView):
    queryset = Log.objects.all()
    serializer_class = LogSerializer
