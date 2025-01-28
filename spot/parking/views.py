from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import User, ParkingPlace, ParkingLot, ParkingDetails, Payment, Log
from .serializers import (
    UserSerializer,
    ParkingPlaceSerializer,
    ParkingLotSerializer,
    ParkingDetailsSerializer,
    PaymentSerializer,
    LogSerializer,
)

class UserListCreateView(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ParkingPlaceListCreateView(ListCreateAPIView):
    queryset = ParkingPlace.objects.all()
    serializer_class = ParkingPlaceSerializer

class ParkingLotListCreateView(ListCreateAPIView):
    queryset = ParkingLot.objects.all()
    serializer_class = ParkingLotSerializer

class ParkingDetailsListCreateView(ListCreateAPIView):
    queryset = ParkingDetails.objects.all()
    serializer_class = ParkingDetailsSerializer

class PaymentListCreateView(ListCreateAPIView):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer

class LogListCreateView(ListCreateAPIView):
    queryset = Log.objects.all()
    serializer_class = LogSerializer
