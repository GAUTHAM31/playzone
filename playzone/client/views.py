# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from django.http import Http404, HttpResponseRedirect, HttpResponse
from client.models import slot,ground
from django.shortcuts import render

def index(request):
    slist=slot.objects.filter()
    return render(request,'index.html',{'slots':slist})

def landing(request):
    #if request.method == 'POST':
    #    location=request.POST['location']
    #    slist=slot.objects.filter(location=location)
    return render(request,'client/landing.html',{'slots':slist,})

#def addplayer(request):

# Create your views here.
