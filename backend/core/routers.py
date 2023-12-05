from rest_framework import routers
from authentication.views import UserViewSet
from donats.views import DonatViewSet, ProjectViewSet
from cats.views import CatViewSet, AdoptionApplicationViewSet
router = routers.DefaultRouter()

router.register('users', UserViewSet) 
router.register('donats', DonatViewSet) 
router.register('cats', CatViewSet) 
router.register('projects', ProjectViewSet) 
router.register('adoption-applications', AdoptionApplicationViewSet) 
