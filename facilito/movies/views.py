from django.shortcuts import render
from __future__ import unicode_literals
def index(request):
    return render(request, 'index.html',locals())
# Create your views here.
