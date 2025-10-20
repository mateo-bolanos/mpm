# Contributing to MPM

Thank you for helping build the Corrugation & Packaging Project Manager.

## Prerequisites
- Python 3.11+
- Poetry 1.8+
- Node.js 20+

## Getting Started
1. Clone the repository and copy environment files:
   ```bash
   cp backend/.env.example backend/.env
   cp frontend/.env.example frontend/.env
   ```
2. Install tooling and dependencies:
   ```bash
   make setup
   ```
3. Run the full validation suite:
   ```bash
   make test
   ```

## Code Quality
- Pre-commit hooks enforce black, isort, ruff, eslint, and prettier. Install with:
  ```bash
  pre-commit install
  ```
- Ensure `make test` passes before opening a pull request.
- Follow the architecture decisions documented in `docs/`.

## Branching & Commits
- Use conventional commit messages. Commitlint runs in CI.
- Include context in pull requests referencing the issue pack task IDs.
