# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib.auth.models import User
from django.db import models
import datetime

class slot (models.Model):
    sid=models.IntegerField(primary_key=True)
    gid=models.IntegerField()
    time=models.DateTimeField()
    no=models.IntegerField()
    max=models.IntegerField()
    min=models.IntegerField()
    sport=models.CharField(max_length=20)

class ground(models.Model):
    gid=models.IntegerField(primary_key=True)
    location=models.CharField(max_length=20 )
    cid=models.IntegerField()


# Create your models here.
