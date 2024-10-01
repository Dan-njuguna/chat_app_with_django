from rest_framework.views import APIView # type: ignore
from rest_framework.response import Response
from django.shortcuts import render # type: ignore
from .models import User
from .serializer import UserSerializer


class UserListView(APIView):
    def get(self, request):
        Users = User.object.all()
        serializer = UserSerializer(Users, many=True)
        return Response(serializer.data)
#views are class based functins that  take requests and return responses 

# Create your views here.
# def home(request):
#     return render (request, 'FlixChatt/login.html')
def index(request):
    return render (request, 'FlixChatt/index.html')