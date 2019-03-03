"""All registered users are input into this model"""

from models import BaseModel
from playhouse.postgres_ext import CharField, PrimaryKeyField


class User(BaseModel):
    name = PrimaryKeyField()
    photo = CharField(null=True)
