from django.db import models

class User(models.Model):
    Name = models.CharField(max_length=26)
    Gmail = models.EmailField()
    passw = models.CharField(max_length=30)

    def __str__(self):
        return self.Name