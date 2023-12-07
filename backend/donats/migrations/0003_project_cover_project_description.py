# Generated by Django 4.2 on 2023-12-07 15:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('donats', '0002_project_donat_project'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='cover',
            field=models.ImageField(default='assda', upload_to='projects', verbose_name='Изображение'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='project',
            name='description',
            field=models.TextField(default='asdasd', verbose_name='Описание'),
            preserve_default=False,
        ),
    ]