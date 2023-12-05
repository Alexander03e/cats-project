from rest_framework import routers
from authentication.views import UserViewSet
from donats.views import DonatViewSet
from cats.views import CatViewSet, AdoptionApplicationViewSet
router = routers.DefaultRouter()

router.register('users', UserViewSet) 
router.register('donats', DonatViewSet) 
router.register('cats', CatViewSet) 
router.register('adoption-applications', AdoptionApplicationViewSet) 
