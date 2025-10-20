from django.contrib import admin
from django.http import JsonResponse
from django.urls import path

from . import settings


def healthcheck(_request):
    return JsonResponse({"status": settings.HEALTHCHECK_RESPONSE})


urlpatterns = [
    path("admin/", admin.site.urls),
    path("health/", healthcheck, name="healthcheck"),
]
