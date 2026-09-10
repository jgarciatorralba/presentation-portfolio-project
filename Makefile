.PHONY: build up down

ENV ?= dev

ifeq ($(ENV),dev)
COMPOSE_FILE := docker-compose.dev.yml
COMPOSE_ENV_FILE :=
else ifeq ($(ENV),prod)
COMPOSE_FILE := docker-compose.yml
COMPOSE_ENV_FILE := --env-file ../.env.build
else
$(error ENV must be either 'dev' or 'prod')
endif

COMPOSE := cd .docker && docker compose $(COMPOSE_ENV_FILE) -f $(COMPOSE_FILE)

build:
	$(COMPOSE) build

up:
	$(COMPOSE) up -d --build

down:
	$(COMPOSE) down
