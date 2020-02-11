from django.urls import path, include
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token
from accounts.views import LogoutView, RegisterApiView
router = routers.DefaultRouter()

urlpatterns = [
    path('', include(router.urls)),
    path('login/', obtain_auth_token, name='obtain_auth_token'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('register/', RegisterApiView.as_view(), name='register_api')
]

app_name = 'accounts'
