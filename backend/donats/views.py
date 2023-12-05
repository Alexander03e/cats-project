from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .models import Donat
from .serializers import DonatSerializer


class DonatViewSet(viewsets.ModelViewSet):
    queryset = Donat.objects.all()
    serializer_class = DonatSerializer
    permission_classes = (IsAuthenticated,)   
