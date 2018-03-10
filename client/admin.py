# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .models import ground,slot
from django.contrib import admin

class groundAdmin(admin.ModelAdmin):
    list_display=['gid','location','cid','gname']
class slotAdmin(admin.ModelAdmin):
    list_display=['sid','gid','starttime','endtime','no','max','min','sport']

admin.site.register(slot, slotAdmin)
admin.site.register(ground, groundAdmin)
# Register your models here.
