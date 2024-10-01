# this urls file maps urls of all the apps in my project
from django.urls import path  # type: ignore
from  . views import UserListView, index

urlpatterns = [
    path('', index, name = "FlixChatt/index.html"),
    path('api/users/', UserListView.as_view(), name = 'item-list')
]
