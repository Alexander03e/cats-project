from django import forms
from django.contrib.auth.forms import ReadOnlyPasswordHashField
from django.forms import ValidationError

from .models import User


class UserCreationForm(forms.ModelForm):
    username = forms.CharField(label='Логин')
    password1 = forms.CharField(label='Пароль', widget=forms.PasswordInput)
    password2 = forms.CharField(label='Подтвердите пароль', widget=forms.PasswordInput)
    full_name = forms.CharField(label='ФИО')
    email = forms.EmailField(label='Email', required=False)
    city = forms.CharField(label='Город', required=False)

    class Meta:
        model = User
        fields = ('username',)

    def clean_password2(self):
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise ValidationError("Passwords don't match")
        return password2

    def clean_username(self):
        username = self.cleaned_data.get("username")
        return username

    def clean_full_name(self):
        full_name = self.cleaned_data.get("full_name")
        return full_name

    def clean_email(self):
        email = self.cleaned_data.get("email")
        return email

    def clean_city(self):
        city = self.cleaned_data.get("city")
        return city

    def save(self, commit=True):
        user = super(UserCreationForm, self).save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        if self.cleaned_data.get("username", False):
            user.username = self.cleaned_data["username"]
        if self.cleaned_data.get("full_name", False):
            user.full_name = self.cleaned_data["full_name"]
        if self.cleaned_data.get("email", False):
            user.email = self.cleaned_data["email"]
        if self.cleaned_data.get("city", False):
            user.city = self.cleaned_data["city"]
        if commit:
            user.save()
        return user


class UserChangeForm(forms.ModelForm):
    password = ReadOnlyPasswordHashField()

    class Meta:
        model = User
        fields = ('email', 'full_name', 'password', 'city', 'is_active', 'is_staff')

    def clean_password(self):
        return self.initial["password"]
