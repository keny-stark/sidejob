from django.urls import path
from accounts.views import LoginView, LogoutView, register_view

urlpatterns = [
    path('login/', LoginView, name='login'),
    path('logout/', LogoutView, name='logout'),
    path('register/', register_view, name='register'),
]

app_name = 'accounts'
