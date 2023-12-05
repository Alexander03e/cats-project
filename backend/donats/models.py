from django.db import models
from authentication.models import User


class Project(models.Model):
    title = models.CharField(verbose_name='Название проекта', max_length=255)
    goal = models.PositiveIntegerField(verbose_name='Цель')

    @property
    def current(self):
        cur = 0
        donates = Donat.objects.filter(project=self)
        for donate in donates:
            cur += donate.summ
        return cur

    class Meta:
        verbose_name = 'Проект'
        verbose_name_plural = 'Проекты'

    def __str__(self):
        return self.title


class Donat(models.Model):
    summ = models.PositiveIntegerField(verbose_name='Сумма')
    user = models.ForeignKey(verbose_name='Отправитель', to=User, on_delete=models.CASCADE)
    project = models.ForeignKey(verbose_name='Проект', to=Project, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Донат'
        verbose_name_plural = 'Донаты'

    def __str__(self):
        return str(self.summ) + ' <- ' + str(self.user.email)
