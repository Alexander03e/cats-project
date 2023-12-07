from rest_framework import serializers

from .models import User

class UserSerializer(serializers.HyperlinkedModelSerializer):
    password1 = serializers.CharField(
        write_only=True,
        required=True,
    )
    password2 = serializers.CharField(
        write_only=True,
        required=True,
    )
    class Meta:
        model = User
        fields = ['url', 'id', 'username', 'password1', 'password2', 'email', 'full_name', 'city']
