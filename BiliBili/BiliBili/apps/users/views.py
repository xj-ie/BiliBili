from django import http
from django.shortcuts import render
from django.views import View
from rest_framework.views import APIView
import re
# Create your views here.
from users.models import User


class RegisterView(View):
    def get(self, request):
        return render(request, "register.html")
    def post(self,request):
        body = request.POST

        return http.JsonResponse({'1':1})

class UserCountVIew(View):
    def get(self,request):
        user = request.GET.get("user")
        if not user or not re.match(r"[A-Za-z0-9_-]{5,16}",user):
            return http.JsonResponse({"conde": 410, "msgerror": "NON", "count": 1})
        try:
            count = User.objects.filter(username=user).count()
        except Exception as e :
            print(e)
            return http.JsonResponse({"conde":410,"msgerror":"NON","count":1})
        return http.JsonResponse({'conde':200,"msgerror":"OK","count":count})

class PhoneView(View):
    def get(self,request):
        mobile = request.GET.get("mobile")
        if not mobile:
            return http.JsonResponse({"conde":410,"msgerror":"NON","count":1})
        try:
            count = User.objects.filter(mobile=mobile).count()
        except Exception as e:
            print(e)
            return http.JsonResponse({"conde":410,"msgerror":"NON","count":1})
        return http.JsonResponse({'conde': 200, "msgerror": "OK", "count": count})