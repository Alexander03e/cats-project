from django.db import models
from authentication.models import User


class Donat(models.Model):
    summ = models.PositiveIntegerField(verbose_name='Сумма')
    user = models.ForeignKey(verbose_name='Отправитель', to=User, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Донат'
        verbose_name_plural = 'Донаты'

    def __str__(self):
        return str(self.summ) + ' <- ' + str(self.user.email)
