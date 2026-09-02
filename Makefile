.PHONY: dev-up dev-down prod-up prod-down

dev-up:
	cd .docker && docker compose \
		-f docker-compose.dev.yml \
		up -d --build

dev-down:
	cd .docker && docker compose \
		-f docker-compose.dev.yml \
		down

prod-up:
	cd .docker && docker compose --env-file ../.env \
		-f docker-compose.yml \
		up -d --build

prod-down:
	cd .docker && docker compose --env-file ../.env \
		-f docker-compose.yml \
		down
