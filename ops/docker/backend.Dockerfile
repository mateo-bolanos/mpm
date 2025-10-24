FROM python:3.11-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

WORKDIR /app

RUN pip install --no-cache-dir poetry==1.8.2
COPY backend/pyproject.toml backend/poetry.lock* /app/
RUN poetry config virtualenvs.create false \
    && poetry install --no-interaction --no-ansi

COPY backend /app

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
