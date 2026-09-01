from django.urls import path
from website.views import *

app_name = 'website'

urlpatterns = [
    path('', index_view, name='index'),
    path('posts/', post_list_view, name='post_list'),
    path('posts/<int:pk>/', post_detail_view, name='post_detail'),
]