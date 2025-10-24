# ADR-0001: Foundational Technology Stack

## Status
Accepted

## Context
The Corrugation & Packaging Project Manager must support rapid iteration across a Django backend and a modern TypeScript frontend while remaining testable and cloud ready. We need shared tooling that enforces code quality for a distributed team.

## Decision
- Backend built with **Django 5**, **Django REST Framework**, **Celery**, and **Redis** for asynchronous workloads. Dependency management via **Poetry**.
- Frontend built with **React 18**, **Vite**, **TypeScript**, and **Material UI** for fast developer experience and accessible components.
- Testing uses **pytest** with coverage for backend and **Vitest + Testing Library** for frontend. **Playwright** is reserved for end-to-end automation scaffolding.
- Repository level tooling: **pre-commit** for black, isort, ruff, eslint, and prettier; **Makefile** orchestrates setup/test commands; **GitHub Actions** ensures lint/test/build on every push.

## Consequences
- Contributors must install Poetry and Node.js. `make setup` provisions dependencies and `make test` runs validation across both stacks.
- The stack is well understood across the team which accelerates feature delivery and onboarding.
