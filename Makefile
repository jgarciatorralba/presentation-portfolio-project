 .PHONY: up down

up:
	cd .docker && docker compose --env-file ../.env \
		-f docker-compose.yml \
		-f docker-compose.dev.yml \
		up -d --build

down:
	cd .docker && docker compose \
		-f docker-compose.yml \
		-f docker-compose.dev.yml \
		down
