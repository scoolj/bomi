from django.urls import path
from .views import PropertyOwnerListView, PropertyOwnerView, TopSellerView

urlpatterns =[
    path('', PropertyOwnerListView.as_view()),
    path('topseller', TopSellerView.as_view()),
    path('<pk>', PropertyOwnerView.as_view()),

]
