from connect import user
from django.contrib import messages
from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib import auth
from django.contrib.auth import authenticate, logout, login
from .models import Users


def index(request):
    return render(request, "index.html")


def courses(request):
    return render(request, "courses.html")


def about(request):
    return render(request, "about.html")


def contact(request):
    return render(request, "contact.html")


def resources(request):
    return render(request, "resources.html")


def basic(request):
    return render(request, "basic.html")


def basicsyntax(request):
    return render(request, "basicsyntax.html")


def collections(request):
    return render(request, "collections.html")


def constructor(request):
    return render(request, "constructor.html")


def datastructures(request):
    return render(request, "datastructures.html")


def environmentSetup(request):
    return render(request, "environmentSetup.html")


def inheritance(request):
    return render(request, "inheritance.html")


def objects(request):
    return render(request, "objects.html")


def overriding(request):
    return render(request, "overriding.html")


def overview(request):
    return render(request, "overview.html")


def quiz(request):
    return render(request, "quiz.html")


def quiz1(request):
    return render(request, "quiz1.html")


def quiz2(request):
    return render(request, "quiz2.html")


def quiz3(request):
    return render(request, "quiz3.html")


def quiz_info(request):
    return render(request, "quiz_info.html")


def add_score(request):
    if request.method == 'GET':
        score = request.GET.get("request_data");
        usernm = request.session["user"];
        print(score);
        s1 = Users.objects.get(user_name=usernm);
        print(s1.user_name);
        print(s1.quiz_count);
        score1 = s1.quiz_count;
        data = Users.objects.filter(user_name=s1.user_name).update(quiz_count=score+s1.quiz_count);
        data.save();
    return render(request, "index.html")


def logout(request):
    auth.logout(request, user);
    return render(request, "index.html")


def login(request):
    if request.method == 'POST':
        email = request.POST["email"]
        pass1 = request.POST["password"]

        # user = auth.authenticate( email=email, password=pass1)
        # Users = authenticate(email=email, password=pass1)
        user = Users.objects.get(email=email, password=pass1)
        print(user)
        print(user.user_name)
        if user:
            auth.login(request, user)
            request.session["user"] = user.user_name;
            print("users")
            return render(request, "index.html")
        else:
            messages.info(request, 'invasdfg')
            print("okk")
            return render(request, "login.html")


    else:
        print("jhgh")
        return render(request, "login.html")


def register(request):
    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]
        password = request.POST["password"]
        confirm_password = request.POST["confirm_password"]

        if password == confirm_password:
            data = Users(user_name=username, email=email, password=password, quiz_count=0,quiz_count1=0,quiz_count2=0)
            data.save()
        # user=User.objects.create_user(first_name=username,username=email,password=password)
        # user.save();
        # print("ok")
        return render(request, "login.html")
    else:
        print("cvghj")
        return render(request, "index.html")
