from django.urls import path
from .views import PropertyOWnerListView, PropertyOWnerView, TopSellerView

urlpatterns =[
    path('', PropertyOWnerListView.as_view()),
    path('topseller', TopSellerView.as_view()),
    path('<pk>', PropertyOWnerView.as_view()),

]
