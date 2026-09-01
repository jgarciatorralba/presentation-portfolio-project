# Build stage
FROM node:22.16.0-bookworm AS builder
WORKDIR /var/www/presentation-portfolio-project

COPY package*.json ./
RUN npm ci

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

COPY . .
RUN npm run build

# Production stage
FROM node:22.16.0-bookworm AS runner
WORKDIR /var/www/presentation-portfolio-project

ENV NODE_ENV=production
ENV PORT=3000

COPY --from=builder /var/www/presentation-portfolio-project/next.config.ts ./next.config.ts
COPY --from=builder /var/www/presentation-portfolio-project/public ./public
COPY --from=builder /var/www/presentation-portfolio-project/.next ./.next
COPY --from=builder /var/www/presentation-portfolio-project/node_modules ./node_modules
COPY --from=builder /var/www/presentation-portfolio-project/package.json ./package.json

EXPOSE 3000

CMD ["npm", "start"]
