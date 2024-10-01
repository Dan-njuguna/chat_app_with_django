# this file helps convert complex data types  into native python datatypes 
#this can then be easily rendered as XML or JSON files that can be sent to the front end via API
from FlixChatt.models import User
from rest_framework import serializers# type: ignore
 
class UserSerializer (serializers.ModelSerializer):
 class Meta:
  model = User
  fields = ('id', 'username', 'email', 'profile_image')