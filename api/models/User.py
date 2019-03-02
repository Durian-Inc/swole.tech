"""All registered users are input into this model"""

from models import BaseModel
from playhouse.postgres_ext import CharField, PrimaryKeyField


class User(BaseModel):
    id = PrimaryKeyField()
    name = CharField()
    photo = CharField(null=True)
