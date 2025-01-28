from django.contrib import admin
from .models import User, ParkingPlace, ParkingLot, ParkingDetails, Payment, Log, VehicleType

admin.site.register(User)
admin.site.register(ParkingPlace)
admin.site.register(ParkingLot)
admin.site.register(ParkingDetails)
admin.site.register(Payment)
admin.site.register(Log)
admin.site.register(VehicleType)
