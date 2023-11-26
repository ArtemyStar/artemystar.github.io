from django.forms import ModelForm, TextInput, EmailInput, PasswordInput
from .models import User


class RegistartionForm(ModelForm):
    class Meta:
        model = User
        fields = ['Name', 'Gmail', 'passw']

        widgets = {
            'Name': TextInput(attrs={
                'placeholder': 'Name',
                'maxlength': 26,
                'required': True,
                'id': 'name'
            }),

            'Gmail': EmailInput(attrs={
                'placeholder': 'Gmail',
                'required': True,
                'id': 'gmail'
            }),

            'passw': PasswordInput(attrs={
                'placeholder': 'password',
                'required': True,
                'id': 'password'
            })
        }