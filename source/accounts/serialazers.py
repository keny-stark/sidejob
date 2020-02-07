from django.contrib.auth import authenticate
from rest_framework import serializers, exceptions
from accounts.models import Account


class RegistrationSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = Account
        fields = ['email', 'username', 'password', 'password2']
        extra_kwargs = {
            'password': {'write_only': True},
        }

    def validate(self, data):
        username = data.get("username", "")
        password = data.get("password", "")

        if username and password:
            user = authenticate(username=username, password=password)
            if user.is_active:
                data["user"] = user
        else:
            msg = "Необходимо указать имя пользователя и пароль"
            raise exceptions.ValidationError(msg)
        return data

    def save(self):
        account = Account(
            email=self.validated_data['email'],
            username=self.validated_data['username']
        )
        password = self.validated_data['password']
        password2 = self.validated_data['password2']
        if password != password2:
            raise serializers.ValidationError({'пароль: Пароли должны совпадать.'})
        account.save()
        return account


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        username = data.get("username", "")
        password = data.get("password", "")

        if username and password:
            user = authenticate(username=username, password=password)
            if user:
                if user.is_active:
                    data["user"] = user
                else:
                    msg = "Пользователь деактивирован."
                    raise exceptions.ValidationError(msg)
            else:
                msg = "Невозможно войти с указанными учетными данными."
                raise exceptions.ValidationError(msg)
        else:
            msg = "Необходимо указать имя пользователя и пароль"
            raise exceptions.ValidationError(msg)
        return data
