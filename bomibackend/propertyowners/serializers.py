from rest_framework import serializers
from .models import PropertyOwner


class PropertyOwnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = PropertyOwner
        fields = '__all__'
