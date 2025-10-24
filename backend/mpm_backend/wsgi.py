"""WSGI config for the MPM project."""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "mpm_backend.settings")

application = get_wsgi_application()
