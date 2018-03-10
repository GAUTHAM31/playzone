# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from django.http import Http404, HttpResponseRedirect, HttpResponse
from client.models import slot,ground
from django.shortcuts import render
import json
from django.core import serializers

def index(request):
    slist=list(slot.objects.filter())
    print slist
    for item in slist:
        print item.sid
        print item.gid.location
    #json_list = json.dumps(slist)
    json_list = serializers.serialize("json", slist)
    print json_list
    return render(request,'index.html',{'slots':json_list})

def landing(request):
    #if request.method == 'POST':
    #    location=request.POST['location']
    #    slist=slot.objects.filter(location=location)
    return render(request,'index.html',{'slots':slist,})

#def addplayer(request):

# Create your views here.
