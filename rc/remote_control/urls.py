from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.main_page, name = 'main'),
    path('info/', views.info, name = 'info'),
]
