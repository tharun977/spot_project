from rest_framework import serializers
from .models import User, ParkingPlace, ParkingLot, ParkingDetails, Payment, Log


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password', 'email', 'full_name', 'role']
        extra_kwargs = {'password': {'write_only': True}}

    def validate_role(self, value):
        if value not in ['user', 'admin']:
            raise serializers.ValidationError("Role must be either 'user' or 'admin'.")
        return value

class ParkingPlaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = ParkingPlace
        fields = '__all__'

class ParkingLotSerializer(serializers.ModelSerializer):
    class Meta:
        model = ParkingLot
        fields = '__all__'

class ParkingDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ParkingDetails
        fields = '__all__'

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = '__all__'

class LogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Log
        fields = '__all__'
