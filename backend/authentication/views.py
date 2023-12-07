from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status

from .models import User
from .serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
    @action(detail=False, methods=['get'])
    def profile(self, request):
        return Response(UserSerializer(request.user, context={'request': request}).data)
    
    @action(detail=False, methods=['post'])
    def register(self, request):
        serialized = UserSerializer(data=request.data, context={'request': request})
        if serialized.is_valid():
            User.objects.create_user(
                request.data['username'],
                request.data['password'],
                full_name=request.data['full_name'],
                email=request.data['email'],
                city=request.data['city'],
            )
            return Response(serialized.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serialized._errors, status=status.HTTP_400_BAD_REQUEST)
    