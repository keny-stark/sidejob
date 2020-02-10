from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework import serializers, exceptions
from rest_framework.exceptions import ValidationError

from accounts.models import Account


# class LoginSerializer(serializers.Serializer):
#     username = serializers.CharField()
#     password = serializers.CharField()
#
#     def validate(self, data):
#         username = data.get("username", "")
#         password = data.get("password", "")
#
#         if username and password:
#             user = authenticate(username=username, password=password)
#             if user:
#                 if user.is_active:
#                     data["user"] = user
#                 else:
#                     msg = "Пользователь деактивирован."
#                     raise exceptions.ValidationError(msg)
#             else:
#                 msg = "Невозможно войти с указанными учетными данными."
#                 raise exceptions.ValidationError(msg)
#         else:
#             msg = "Необходимо указать имя пользователя и пароль"
#             raise exceptions.ValidationError(msg)
#         return data

class PasswordValidator:
    def __init__(self, length):
        self.length = length

    def __call__(self, value):
        if len(value) < self.length:
            raise ValidationError(f'Пароль должен быть длинее {self.length} символов')
        return value


def password_validator(value):
    if len(value) < 8:
        raise ValidationError('Пароль должен быть длинее 8 символов')
    return value


class UserRegisterSerializer(serializers.ModelSerializer):
    password_confirm = serializers.CharField(max_length=128, source='password', write_only=True, required=True,
                                             # валидатор в виде функции или объекта класса
                                             validators=[password_validator])

    def validate(self, attrs):
        password = attrs.get("password")
        password_confirm = attrs.get("password_confirm")
        if password and password_confirm and password != password_confirm:
            raise ValidationError('Пароли не совпадают!')
        return super().validate(attrs)

    def validate_password(self, value):
        if len(value) < 8:
            raise ValidationError('Пароль должен быть длинее 8 символов')
        return value

    def create(self, validated_data):
        user = User.objects.create(username=validated_data.get('username'))
        user.set_password(validated_data.get("password"))
        user.save()
        return user

    class Meta:
        model = User
        fields = ('username', 'password', 'password_confirm')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'email')
