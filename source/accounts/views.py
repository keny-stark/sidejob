from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView
from accounts.serialazers import UserRegisterSerializer, UserSerializer
from rest_framework.permissions import AllowAny


class LogoutView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        user = self.request.user
        if user.is_authenticated:
            user.auth_token.delete()
        return Response({'status': 'ok'})


class RegisterApiView(APIView):
    parser_classes = [JSONParser]
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        data = request.data
        serializer = UserRegisterSerializer(data=data)
        if serializer.is_valid():
            user = serializer.save()
            return Response(UserSerializer(instance=user).data)
        response = Response(serializer.errors)
        response.status_code = 400
        return response
