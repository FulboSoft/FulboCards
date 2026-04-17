from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    monedas = models.PositiveIntegerField(default=0)
    nivel = models.PositiveIntegerField(default=1)
    avatar = models.ImageField(upload_to='avatars/', blank=True, null=True)
    fecha_alta = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username
# Create your models here.
