setup-ui:
	@cd ./assets/ui && bun install

setup-django:
	@poetry install

run-css:
	@cd ./assets/ui && bunx tailwindcss -i ./src/styles.css -o ./dist/css/index.css --watch

run-ui:
	@cd ./assets/ui && bun run dev

delete-migration-files:
	@find . -path "*/migrations/*.py" -not -name "__init__.py" -delete
	@find . -path "*/migrations/*.pyc"  -delete

delete-db:
	@rm -f db.sqlite3

migrations:
	@python manage.py makemigrations

migrate:
	@python manage.py migrate

reset-db: delete-migration-files delete-db migrate-all superuser

migrate-all: migrations migrate

# Super User
superuser:
	@export DJANGO_SUPERUSER_EMAIL="user@example.com" && export DJANGO_SUPERUSER_PASSWORD=password1 && python manage.py createsuperuser --noinput

# Shells
shell:
	@python manage.py shell

dbshell:
	@python manage.py dbshell

# Running and Testing
run:
	@python manage.py runserver