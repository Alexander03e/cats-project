from django.contrib.auth.base_user import BaseUserManager
from rest_framework.serializers import ValidationError

class CustomUserManager(BaseUserManager):
    def create_user(self, username, password1, password2, **extra_fields):
        if not username:
            raise ValueError('username must be set.')
        user = self.model(username=username, **extra_fields)
        if password1 and password2 and password1 != password2:
            raise ValidationError({'password': "Пароли не совпадают"})
        user.set_password(password1)
        user.save()
        return user

    def create_superuser(self, username, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')
        return self.create_user(username, password1=password, password2=password, **extra_fields)
