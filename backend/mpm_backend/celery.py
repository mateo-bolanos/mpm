import os

from celery import Celery

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "mpm_backend.settings")

app = Celery("mpm_backend")
app.config_from_object("django.conf:settings", namespace="CELERY")
app.autodiscover_tasks()


@app.task
def healthcheck() -> str:
    """Simple Celery task used for smoke checks."""
    return "ok"
