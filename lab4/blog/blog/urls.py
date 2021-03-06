from django.contrib import admin
from django.urls import path
from articles import views
from django.conf.urls import url

urlpatterns = [
    path('admin/', admin.site.urls),
    path('archive/', views.archive),
    url(r'^article/(?P<article_id>\d+)$', views.get_article, name='get_article'),
]