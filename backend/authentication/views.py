from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from django.core import serializers


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
            user = User.objects.create_user(
                username=request.data['username'],
                password1=request.data['password1'],
                password2=request.data['password2'],
                email=request.data['email'],
                full_name=request.data['full_name'],
                city=request.data['city'],
            )
            # serialized_obj = serializers.serialize('json', [user, ])
            # user = serialized.save()
            # user.set_password(serialized.validated_data['password'])
            # user.save()
            return Response({'message': 'Successed'}, status=status.HTTP_201_CREATED)
        else:
            return Response(serialized._errors, status=status.HTTP_400_BAD_REQUEST)
    