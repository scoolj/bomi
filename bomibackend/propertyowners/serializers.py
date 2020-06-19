from rest_framework import serializers
from .models import PropertyOWner


class PropertyOWnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = PropertyOWner
        fields = '__all__'
