# syntax=docker/dockerfile:1

FROM node:20-slim AS base
WORKDIR /app
ENV NODE_ENV=production

# Install only production dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Copy application source
COPY src ./src

# Ensure runtime data directory exists (SQLite default path)
RUN mkdir -p /app/data

# Listen on the port provided by Cloud Run (default 8080)
ENV PORT=8080
EXPOSE 8080

CMD ["node", "src/server.js"]
