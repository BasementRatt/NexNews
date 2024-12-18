from django.urls import path

from . import views

app_name = 'nex'

urlpatterns = [
    path('', views.index, name='index'),
]