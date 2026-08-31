# Build stage
FROM node:22.16.0-alpine AS builder
WORKDIR /var/www/presentation-portfolio-project

COPY package.json .
RUN npm install

COPY . .
RUN npm run build

# Production stage
FROM node:24.2-alpine
WORKDIR /var/www/presentation-portfolio-project

COPY --from=builder /var/www/presentation-portfolio-project/next.config.ts ./next.config.ts
COPY --from=builder /var/www/presentation-portfolio-project/public ./public
COPY --from=builder /var/www/presentation-portfolio-project/.next ./.next
COPY --from=builder /var/www/presentation-portfolio-project/node_modules ./node_modules
COPY --from=builder /var/www/presentation-portfolio-project/package.json ./package.json

CMD ["npm", "start"]
