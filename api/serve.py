"""All server objects needed at beginning of app runtime"""
import os

from flask import Flask

from dotenv import load_dotenv
from playhouse.postgres_ext import PostgresqlExtDatabase

load_dotenv(dotenv_path='./.env')
DATABASE_HOST = os.getenv("DATABASE-HOST")
DATABASE_PORT = os.getenv("DATABASE-PORT")
DATABASE_NAME = os.getenv("DATABASE-NAME")
DATABASE_USER = os.getenv("DATABASE-USER")
DATABASE_PASS = os.getenv("DATABASE-PASS")

app = Flask("Swole Tech")
app.config.from_object('config')
db = PostgresqlExtDatabase(
        DATABASE_NAME,
        host=DATABASE_HOST,
        port=DATABASE_PORT,
        user=DATABASE_USER,
        password=DATABASE_PASS)
