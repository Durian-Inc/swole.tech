"""Serves as the base for each model in the app, ties the database to the model"""
from playhouse.postgres_ext import Model

from serve import db

class BaseModel(Model):
    class Meta:
        database = db

