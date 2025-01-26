from rest_framework import serializers
from .models import User, ParkingPlace, ParkingLot, Payment  # Make sure all models are imported

class ParkingLotSerializer(serializers.ModelSerializer):
    class Meta:
        model = ParkingLot
        fields = '__all__'

class ParkingPlaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = ParkingPlace
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'email', 'full_name']
        extra_kwargs = {
            'password': {'write_only': True},
        }

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            full_name=validated_data['full_name']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

# Define PaymentSerializer if needed
class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment  # Replace with your actual Payment model
        fields = '__all__'  # Adjust the fields as necessary
