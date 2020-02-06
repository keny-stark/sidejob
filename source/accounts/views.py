from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from accounts.serialazers import RegistrationSerializer

print('dod')
@api_view(['POST', ])
def registration_view(request):
    print('im her')
    if request.method == 'POST':
        serializer = RegistrationSerializer(data=request.data)
        data = {}
        if serializer.is_valid():
            account = serializer.save()
            data['response'] = 'successfully registered new user.'
            data['email'] = account.email
            data['username'] = account.username
        else:
            data = serializer.errors
        return Response(data)
