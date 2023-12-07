from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .models import Donat, Project
from .serializers import DonatSerializer, ProjectSerializer


class DonatViewSet(viewsets.ModelViewSet):
    queryset = Donat.objects.all()
    serializer_class = DonatSerializer
    # permission_classes = (IsAuthenticated,)   


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    # permission_classes = (IsAuthenticated,)   
