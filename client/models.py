# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib.auth.models import User
from django.db import models
import datetime


class ground(models.Model):
    gid=models.AutoField(primary_key=True)
    location=models.CharField(max_length=20, null=True, blank= True )
    cid=models.IntegerField(default=1)
    gname=models.CharField(max_length=20, null=True, blank=True)

class slot (models.Model):
    sid=models.IntegerField(primary_key=True)
    gid=models.ForeignKey(ground, on_delete=models.CASCADE)
    starttime=models.DateTimeField(blank=True,null=True)
    endtime=models.DateTimeField(blank=True)
    no=models.IntegerField(blank=True)
    max=models.IntegerField(blank=True)
    min=models.IntegerField(blank=True)
    sport=models.CharField(max_length=20,blank=True)
    eventname=models.CharField(max_length=20,blank=True)
    cost=models.DecimalField(max_digits=5,decimal_places=2,blank=True,default=200)



# Create your models here.
