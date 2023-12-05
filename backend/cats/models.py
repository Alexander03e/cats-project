from django.db import models
from authentication.models import User


class Cat(models.Model):
    cat_name = models.CharField(verbose_name='Имя', max_length=50)
    breed = models.CharField(verbose_name='Порода', max_length=50)
    age = models.PositiveIntegerField(verbose_name='Возраст')
    photo = models.ImageField(verbose_name='Изображение', upload_to='cats')
    health_status = models.CharField(verbose_name='Состояние здоровья', max_length=50)
    gender = models.CharField(verbose_name='Пол', max_length=50)
    sterilization = models.CharField(verbose_name='Стерилизация', max_length=50)
    date = models.DateField(verbose_name='Дата рождения')
    diagnosis = models.CharField(verbose_name='Диагноз', max_length=255)
    status = models.CharField(verbose_name='Статус', max_length=50)

    class Meta:
        verbose_name = 'Кошка'
        verbose_name_plural = 'Кошки'

    def __str__(self):
        return self.cat_name
    

class AdoptionApplication(models.Model):
    user = models.ForeignKey(verbose_name='Усыновитель', to=User, on_delete=models.PROTECT)
    cat = models.ForeignKey(verbose_name='Кошка', to=Cat, on_delete=models.PROTECT)

    class Meta:
        verbose_name = 'Заявление об усыновлении'
        verbose_name_plural = 'Заявления об усыновлении'

    def __str__(self):
        return str(self.user.email) + ' <- ' + str(self.cat.cat_name)
    