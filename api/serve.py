"""All server objects needed at beginning of app runtime"""
import os

from flask import Flask

from dotenv import load_dotenv
from playhouse.postgres_ext import PostgresqlExtDatabase

load_dotenv(dotenv_path='./.env')


app = Flask("Swole Tech")
app.config.from_object('config')
