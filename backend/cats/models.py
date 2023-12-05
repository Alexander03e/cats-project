from django.db import models
from datetime import date
from authentication.models import User


class Cat(models.Model):
    birth_date = models.DateField(verbose_name='Дата рождения')
    name = models.CharField(verbose_name='Имя', max_length=50)
    receipt_date = models.DateField(verbose_name='Дата поступления')
    gender = models.CharField(verbose_name='Пол', max_length=50)
    color = models.CharField(verbose_name='Цвет', max_length=50)
    breed = models.CharField(verbose_name='Порода', max_length=50)
    photo = models.ImageField(verbose_name='Изображение', upload_to='cats')
    health_status = models.CharField(verbose_name='Состояние здоровья', max_length=50)
    sterilization = models.CharField(verbose_name='Стерилизация', max_length=50)
    address = models.CharField(verbose_name='Найден(а) по адресу', max_length=255)
    diagnosis = models.CharField(verbose_name='Диагноз', max_length=255)
    status = models.CharField(verbose_name='Статус', max_length=50)

    @property
    def age(self):
        today = date.today()
        years = today.year - self.birth_date.year
        months = today.month - self.birth_date.month
        if months <= -1:
            years -= 1
            months = 12 - abs(months)
        days = today.day - self.birth_date.day
        if days <= -1:
            months -= 1
            days = 30 - abs(days)
        if years == 0:
            if months == 0:
                return f'{days} дн.'
            return f'{months} м. {days} дн.'
        return f'{years} г. {months} м.'

    class Meta:
        verbose_name = 'Кошка'
        verbose_name_plural = 'Кошки'

    def __str__(self):
        return self.name
    

class AdoptionApplication(models.Model):
    user = models.ForeignKey(verbose_name='Усыновитель', to=User, on_delete=models.PROTECT)
    cat = models.ForeignKey(verbose_name='Кошка', to=Cat, on_delete=models.PROTECT)

    class Meta:
        verbose_name = 'Заявление об усыновлении'
        verbose_name_plural = 'Заявления об усыновлении'

    def __str__(self):
        return str(self.user.email) + ' <- ' + str(self.cat.cat_name)
    