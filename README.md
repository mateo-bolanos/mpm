# Corrugation & Packaging Project Manager (MPM)

Monorepo for the Corrugation & Packaging Project Manager platform. The system design is documented in `docs/Corrugation & Packaging Project Manager — System Design (v1)`.

## Structure
- `backend/` – Django REST backend with Celery integration.
- `frontend/` – React + Vite + TypeScript + MUI frontend shell.
- `ops/` – CI/CD workflows and container assets.
- `docs/` – Architecture decision records and design references.
- `tests/` – Playwright end-to-end scaffolding.

## Getting Started
```bash
make setup
make test
```

`make setup` installs Python and Node dependencies through Poetry and npm. `make test` runs backend pytest suite, frontend lint, and Vitest unit tests.
