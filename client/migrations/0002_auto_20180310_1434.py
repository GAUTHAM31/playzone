# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2018-03-10 14:34
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('client', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='slot',
            name='eventname',
            field=models.CharField(blank=True, max_length=20),
        ),
        migrations.AddField(
            model_name='slot',
            name='starttime',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
