# Build stage
FROM node:20.18-alpine AS builder
WORKDIR /var/www/portfolio-project

COPY package.json .
RUN npm install

COPY . .
RUN npm run build

# Production stage
FROM node:20.18-alpine
WORKDIR /var/www/portfolio-project

COPY --from=builder /app/next.config.ts ./next.config.ts
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

CMD ["npm", "start"]
