from django.db import models
from django.contrib.auth.models import AbstractUser , Group, Permission

class User(AbstractUser):
    user_id = models.AutoField(primary_key=True)
    full_name = models.CharField(max_length=100)
    contact_number = models.CharField(max_length=15, blank=True)
    role = models.CharField(max_length=50, default="user")

    # Add unique related_name attributes to avoid reverse accessor clashes
    groups = models.ManyToManyField(
        Group,
        related_name="custom_user_groups",  # Unique related_name for groups
        blank=True,
        help_text="The groups this user belongs to.",
        verbose_name="groups",
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name="custom_user_permissions",  # Unique related_name for permissions
        blank=True,
        help_text="Specific permissions for this user.",
        verbose_name="user permissions",
    )

    def __str__(self):
        return self.username
    

class ParkingPlace(models.Model):
    place_id = models.AutoField(primary_key=True)
    place_name = models.CharField(max_length=100)
    location = models.CharField(max_length=200)
    capacity = models.IntegerField()
    status = models.CharField(max_length=50)

class ParkingLot(models.Model):
    lot_id = models.AutoField(primary_key=True)
    place = models.ForeignKey(ParkingPlace, on_delete=models.CASCADE, related_name="lots")
    status_before = models.CharField(max_length=50)
    status_after = models.CharField(max_length=50)

class ParkingDetails(models.Model):
    parking_id = models.AutoField(primary_key=True)
    lot = models.ForeignKey(ParkingLot, on_delete=models.CASCADE, related_name="parking_details")
    vehicle_type = models.ForeignKey("VehicleType", on_delete=models.CASCADE)
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
    payment_method = models.CharField(max_length=50)
    payment_date = models.DateTimeField(auto_now_add=True)
    payment_status = models.CharField(max_length=50)

class Log(models.Model):
    log_id = models.AutoField(primary_key=True)
    timestamp = models.DateTimeField(auto_now_add=True)

class VehicleType(models.Model):
    vehicle_type_id = models.AutoField(primary_key=True)
    vehicle_type = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.vehicle_type
