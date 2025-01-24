from django.db import models
from django.contrib.auth.models import AbstractUser

# Custom User model
class User(AbstractUser):
    user_id = models.AutoField(primary_key=True)
    role = models.CharField(max_length=50)
    full_name = models.CharField(max_length=100)
    contact_number = models.CharField(max_length=15)
    email = models.EmailField(unique=True)

class ParkingPlace(models.Model):
    place_id = models.AutoField(primary_key=True)
    place_name = models.CharField(max_length=100)
    location = models.CharField(max_length=200)
    capacity = models.IntegerField()
    status = models.CharField(max_length=50)

class ParkingLot(models.Model):
    lot_id = models.AutoField(primary_key=True)
    place = models.ForeignKey(ParkingPlace, on_delete=models.CASCADE)
    status_before = models.CharField(max_length=50)
    status_after = models.CharField(max_length=50)

class VehicleType(models.Model):
    vehicle_type_id = models.AutoField(primary_key=True)
    vehicle_type = models.CharField(max_length=50)

class ParkingDetails(models.Model):
    parking_id = models.AutoField(primary_key=True)
    lot = models.ForeignKey(ParkingLot, on_delete=models.CASCADE)
    vehicle_type = models.ForeignKey(VehicleType, on_delete=models.CASCADE)
    vehicle_reg_no = models.CharField(max_length=20)
    in_time = models.DateTimeField()
    out_time = models.DateTimeField(null=True, blank=True)
    parking_duration = models.DurationField(null=True, blank=True)
    occupied_by = models.ForeignKey(User, on_delete=models.CASCADE)

class Payment(models.Model):
    payment_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    parking = models.ForeignKey(ParkingDetails, on_delete=models.CASCADE)
    amount_paid = models.DecimalField(max_digits=10, decimal_places=2)
    parking_fee = models.DecimalField(max_digits=10, decimal_places=2)
    payment_method = models.CharField(max_length=50)
    payment_date = models.DateTimeField(auto_now_add=True)
    payment_status = models.CharField(max_length=50)

class Log(models.Model):
    log_id = models.AutoField(primary_key=True)
    timestamp = models.DateTimeField(auto_now_add=True)
