"""All of the teams"""
from models import BaseModel
from playhouse.postgres_ext import CharField, PrimaryKeyField


class Team(BaseModel):
    id = PrimaryKeyField()
    name = CharField()
