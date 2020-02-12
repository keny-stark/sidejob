from rest_framework import serializers
from .models import Signboard


class SignboardSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(read_only=True)

    class Meta:
        model = Signboard
        fields = ('id', 'created_by', 'summary', 'description', 'status', 'category', 'created_at')

