from django.contrib import admin
from .models import User, ParkingPlace, ParkingLot, ParkingDetails, Payment, Log, VehicleType

admin.site.register([User, ParkingPlace, ParkingLot, ParkingDetails, Payment, Log, VehicleType])
