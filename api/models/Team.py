"""All of the teams"""
from models import BaseModel
from playhouse.postgres_ext import CharField


class Team(BaseModel):
    name = CharField(null=False, unique=True, primary_key=True)
