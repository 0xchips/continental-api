# Continental API

Internal API platform for The Continental Hotel's concierge services.

## Overview

This repository contains the server implementation for The Continental's concierge API,
built on Node.js using the internal [`@continental/concierge-sdk`](https://dev.azure.com/thecontinental-dev/continental-api/_artifacts/feed/continental-npm) package.

## API Documentation

Full API documentation and request collection:  
**[The Continental API — Postman Workspace](https://www.postman.com/continental-devteam/the-continental-api/overview)**

## Development

```bash
npm install
npm test
npm start
```

## CI/CD

Builds run automatically on push via GitHub Actions using a self-hosted runner.
Packages are sourced from our internal Azure Artifacts feed (`continental-npm`).

## Maintainer

Platform team lead: **W. Scott** — `winston@ztaha45hotmail.onmicrosoft.com`  
For SDK issues or access requests, contact the maintainer directly.
