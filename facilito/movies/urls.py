from rest_framework import routers
from .viewsets import MovieViewSet, ImageViewSet

router = routers.SimpleRouter()
router.register('movies', MovieViewSet)
router.register('images', ImageViewSet)

urlpatterns = router.urls
