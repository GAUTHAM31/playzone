# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2018-03-10 18:57
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('client', '0002_auto_20180310_1434'),
    ]

    operations = [
        migrations.AddField(
            model_name='ground',
            name='gname',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='ground',
            name='location',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
    ]
