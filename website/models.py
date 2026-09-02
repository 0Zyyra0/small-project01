from django.db import models
from django.db import models
from django.utils.text import Truncator

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    published_date = models.DateTimeField()
    counted_view = models.IntegerField(default=0)

    def __str__(self):
        return self.title




class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    published_date = models.DateTimeField()
    counted_view = models.IntegerField(default=0)

    def __str__(self):
        return self.title

    def excerpt(self, word_count=20):
        return Truncator(self.content).words(word_count, truncate='...')