# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from django.http import Http404, HttpResponseRedirect, HttpResponse
from client.models import slot,ground
from django.shortcuts import render
import json
from django.core import serializers
from django.views.decorators.csrf import csrf_exempt

def index(request):
    slist=list(slot.objects.filter())
    print slist
    for item in slist:
        print item.sid
        print item.gid.location
    #json_list = json.dumps(slist)
    glist=list()
    for item in slist:
        glist.append(item.gid)
    json_list = serializers.serialize("json", slist)
    json_list2=serializers.serialize("json", glist)
    print json_list
    print "*"
    print json_list2
    return render(request,'index.html',{'slots':json_list , 'loc':json_list2})
@csrf_exempt
def details(request):
    #if request.method == 'POST':
    #    location=request.POST['location']
    #    slist=slot.objects.filter(location=location)
    return render(request,'details.html',{'slots':slist})

def register(request):
    if request.method == 'POST':
       sid= request.POST['sid']
       sobj=slot.objects.get(sid=sid)
       sobj.no+=1
       rlobj.save()
       return redirect(index)
#def addplayer(request):

# Create your views here.
