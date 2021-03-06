# the first "app" is the package AKA directory containing __init__.py
# we are importing the "app" we defined in __init__.py
from app import app

# the app.route decorator maps the URL to the function 

@app.route('/')
@app.route('/index')
def index():
    return 'Hello World'