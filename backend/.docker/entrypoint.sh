#!/bin/bash

npm install
npm run build
npx run typeorm migration:run -d dist/database.provider.js
npm run start:dev
