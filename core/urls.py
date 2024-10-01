#this urls file maps urls that are specific to this app 
from django.contrib import admin # type: ignore
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('FlixChatt.urls'), name = "home")
]
