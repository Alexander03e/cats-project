from django.db import models
from django.contrib.auth.models import AbstractUser
from .managers import CustomUserManager


class User(AbstractUser):
    first_name = None
    last_name = None
    full_name = models.CharField(verbose_name='ФИО', max_length=255)
    email = models.EmailField(verbose_name='Email', unique=True)
    city = models.CharField(verbose_name='Город', max_length=50, blank=True)

    REQUIRED_FIELDS = ['email']

    objects = CustomUserManager()

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'
    
    def __str__(self):
        return self.username
