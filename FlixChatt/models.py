from django.db import models
from django.db import DatabaseError
import time

class User(models.Model):
    def __init__(self):
        self.firstName = models.CharField(max_length = 50)
        self.lastName = models.CharField(max_length = 50)
        self.username = models.CharField(max_length = 50)
        self.email = models.EmailField(max_length = 50)
        self.profileImage = models.ImageField(upload_to = "profile_images")
        self.userId = models.IntegerField(max_length = 8, default = 0)

    def __str__(self):
        return self.username
    
class Message(models.Model):
    def __init__(self):
        self.message = models.CharField(max_length = 1024)
        self.imageFile = models.ImageField(upload_to = "shared_images")
        self.timeStamp = models.DateField(max_length = 8)

    def __str__(self):
        return self.message
    
    