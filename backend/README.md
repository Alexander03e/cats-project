1. python -m venv .venv
2. .venv\Scripts\activate (если Windows)
3. pip install -r requirements.txt
4. python manage.py migrate
5. python manage.py createsuperuser (для входа в админку)
6. python manage.py runserver