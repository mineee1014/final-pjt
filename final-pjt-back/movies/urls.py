from django.urls import path
from . import views
urlpatterns = [
    path('', views.index),
    path('get_country/', views.save_country_data),
    path('get_genre/', views.save_genre_data),
    path('get_movie_by_country/<str:country_code>/<int:page>/', views.get_movie_by_country),
    path('area/', views.area_list),
]
