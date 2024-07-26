from django.forms import forms
from .models import User, Message

class UserSignUpForm(forms.Form):
    def __init__(self):
        pass

class UserSignInForm(forms.Form):
    def __init__(self):
        pass

class UploadFileForm(forms.Form):
    def __init__(self):
        pass
