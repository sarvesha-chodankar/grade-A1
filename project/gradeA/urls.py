from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('courses/', views.courses, name='courses'),
    path('about/', views.about, name='about'),
    path('login/', views.login, name='login'),
    path('', views.logout, name='logout'),
    path('contact/', views.contact, name='contact'),
    path('resources/', views.resources, name='resources'),
    path('register/', views.register, name='register'),
    path('overview/', views.overview, name='overview'),
    path('basic/', views.basic, name='Basic'),
    path('basicsyntax/', views.basicsyntax, name='basicsyntax'),
    path('collections/', views.collections, name='collections'),
    path('constructor/', views.constructor, name='constructor'),
    path('datastructures/', views.datastructures, name='datastructures'),
    path('environmentSetup/', views.environmentSetup, name='environmentSetup'),
    path('inheritance/', views.inheritance, name='inheritance'),
    path('objects/', views.objects, name='objects'),
    path('overriding/', views.overriding, name='overriding'),
    path('quiz/', views.quiz, name='quiz'),
    path('quiz1/', views.quiz1, name='quiz1'),
    path('quiz2/', views.quiz2, name='quiz2'),
    path('quiz3/', views.quiz3, name='quiz3'),
    path('quiz_info/', views.quiz_info, name='quiz_info'),
    path('add_score/', views.add_score, name='add_score'),
]