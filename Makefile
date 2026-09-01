.PHONY: development-up development-down production-up production-down

development-up:
	cd .docker && docker compose \
		-f docker-compose.dev.yml \
		up -d --build

development-down:
	cd .docker && docker compose \
		-f docker-compose.dev.yml \
		down

production-up:
	cd .docker && docker compose --env-file ../.env \
		-f docker-compose.yml \
		up -d --build

production-down:
	cd .docker && docker compose --env-file ../.env \
		-f docker-compose.yml \
		down
