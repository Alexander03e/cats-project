from rest_framework import serializers

from authentication.serializers import UserSerializer
from .models import Cat, AdoptionApplication


class CatSerializer(serializers.HyperlinkedModelSerializer):
    birth_date = serializers.DateField(format="%d-%m-%Y", input_formats=['%d-%m-%Y', 'iso-8601'])
    receipt_date = serializers.DateField(format="%d-%m-%Y", input_formats=['%d-%m-%Y', 'iso-8601'])
    class Meta:
        model = Cat
        fields = [
            'url', 'id', 'birth_date', 'age', 'name', 'receipt_date', 'gender',
            'color', 'breed', 'photo', 'health_status', 
            'sterilization', 'address', 'diagnosis', 'status'
            ]


class AdoptionApplicationSerializer(serializers.HyperlinkedModelSerializer):
    user = UserSerializer(read_only=True)
    cat = CatSerializer(read_only=True)
    class Meta:
        model = AdoptionApplication
        fields = ['url', 'id', 'user', 'cat']


class AdoptionApplicationPostSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = AdoptionApplication
        fields = ['url', 'id', 'user', 'cat']
