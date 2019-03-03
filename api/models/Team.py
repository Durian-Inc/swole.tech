"""All of the teams"""
from models import BaseModel
from playhouse.postgres_ext import PrimaryKeyField


class Team(BaseModel):
    name = PrimaryKeyField(null=False)
