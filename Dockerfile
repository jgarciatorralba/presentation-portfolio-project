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

COPY --from=builder /var/www/portfolio-project/next.config.ts ./next.config.ts
COPY --from=builder /var/www/portfolio-project/public ./public
COPY --from=builder /var/www/portfolio-project/.next ./.next
COPY --from=builder /var/www/portfolio-project/node_modules ./node_modules
COPY --from=builder /var/www/portfolio-project/package.json ./package.json

CMD ["npm", "start"]
