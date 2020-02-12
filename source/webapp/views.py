from rest_framework import viewsets
from rest_framework.permissions import SAFE_METHODS
from .serializers import *


class SignboardViewSet(viewsets.ModelViewSet):
    serializer_class = SignboardSerializer
    queryset = Signboard.objects.all()

    def get_permissions(self):
        if self.request.method in SAFE_METHODS:
            return []
        else:
            return super().get_permissions()
