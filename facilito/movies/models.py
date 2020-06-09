from django.db import models

# Create your models here.
class Movie(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()
    stars = models.FloatField()

class Image(models.Model):
    image = models.ImageField(blank=True)
    title = models.CharField(max_length=50)
