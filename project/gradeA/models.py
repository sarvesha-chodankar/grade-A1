from django.contrib.auth.forms import UserCreationForm
from django.db import models


# Create your models here.

class Users(models.Model):
    user_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    last_login = models.DateTimeField(max_length=50)
    quiz_count = models.IntegerField()
    quiz_count1 = models.IntegerField()
    quiz_count2 = models.IntegerField()



class Meta:
    db_table = "users"



