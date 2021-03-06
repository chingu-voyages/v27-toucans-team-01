# importing Flask class from flask package
from flask import Flask

# create instance of Flask class stored as "app" variable
# name is the argument. Flask uses this value to identify the location of the package
app = Flask(__name__)

from app import routes

