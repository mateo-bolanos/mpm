# Operations

This folder hosts CI/CD and container infrastructure for the Corrugation & Packaging Project Manager.

- `.github/workflows/ci.yml` runs lint, tests, Docker build, and commit linting on every push or pull request.
- `docker/backend.Dockerfile` builds a production-ready Django image using Poetry for dependency management.
