from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from .models import PropertyOWner
from .serializers import PropertyOWnerSerializer


class PropertyOWnerListView(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = PropertyOWner.objects.all()
    serializer_class = PropertyOWnerSerializer
    pagination_class = None


class PropertyOWnerView(RetrieveAPIView):
    queryset = PropertyOWner.objects.all()
    serializer_class = PropertyOWnerSerializer


class TopSellerView(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = PropertyOWner.objects.filter(top_seller=True)
    serializer_class = PropertyOWnerSerializer
    pagination_class = None
