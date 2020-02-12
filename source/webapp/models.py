from django.contrib.auth.models import User
from django.db import models


class Signboard(models.Model):
    created_by = models.ForeignKey(User, null=False, blank=False, verbose_name='created by',
                                   on_delete=models.PROTECT, related_name='tracker_by')
    summary = models.TextField(max_length=100, null=False, blank=False, verbose_name='Summary')
    description = models.TextField(max_length=2000, null=True, blank=True, verbose_name='Description')
    status = models.ForeignKey('webapp.Status', related_name='status_bord', on_delete=models.PROTECT, verbose_name='Status')
    category = models.ForeignKey('webapp.Category', related_name='category_bord',
                                 on_delete=models.PROTECT, verbose_name='Category')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Time of add')

    def __str__(self):
        return self.summary


class Category(models.Model):
    category = models.CharField(max_length=40, null=False, blank=False, verbose_name='Type')

    def __str__(self):
        return self.category


class Status(models.Model):
    status = models.CharField(max_length=40, null=False, blank=False, verbose_name='Status')

    def __str__(self):
        return self.status
