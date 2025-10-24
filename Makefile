.PHONY: setup backend-setup frontend-setup test backend-test frontend-test run format lint

setup: backend-setup frontend-setup

backend-setup:
	cd backend && poetry install

frontend-setup:
	cd frontend && npm install

backend-test:
	cd backend && poetry run pytest

frontend-test:
	cd frontend && npm run lint && npm run test -- --run

backend-lint:
	cd backend && poetry run ruff check . && poetry run black --check . && poetry run isort --check-only .

frontend-lint:
	cd frontend && npm run lint

lint: backend-lint frontend-lint

test: backend-test frontend-test

run:
	@echo "Use separate terminals: 'cd backend && poetry run python manage.py runserver' and 'cd frontend && npm run dev'"

format:
	cd backend && poetry run black . && poetry run isort .
	cd frontend && npm run format
