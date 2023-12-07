from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .models import Cat, AdoptionApplication
from .serializers import CatSerializer, AdoptionApplicationSerializer, AdoptionApplicationPostSerializer


class CatViewSet(viewsets.ModelViewSet):
    queryset = Cat.objects.all()
    serializer_class = CatSerializer
    # permission_classes = (IsAuthenticated,)   


class AdoptionApplicationViewSet(viewsets.ModelViewSet):
    queryset = AdoptionApplication.objects.all()
    serializer_class = AdoptionApplicationSerializer
    permission_classes = (IsAuthenticated,)   

    def get_serializer_class(self):
        if self.action in ["create"]:
            print(11111)
            return AdoptionApplicationPostSerializer
        return super().get_serializer_class()
