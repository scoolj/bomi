from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from .models import PropertyOwner
from .serializers import PropertyOwnerSerializer


class PropertyOwnerListView(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = PropertyOwner.objects.all()
    serializer_class = PropertyOwnerSerializer
    pagination_class = None


class PropertyOwnerView(RetrieveAPIView):
    queryset = PropertyOwner.objects.all()
    serializer_class = PropertyOwnerSerializer


class TopSellerView(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = PropertyOwner.objects.filter(top_seller=True)
    serializer_class = PropertyOwnerSerializer
    pagination_class = None
