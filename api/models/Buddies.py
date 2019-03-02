"""All of the buddies"""
from models import BaseModel, User
from playhouse.postgres_ext import ForeignKeyField


class Buddies(BaseModel):
    myself = ForeignKeyField(User)
    my_friend = ForeignKeyField(User)

    class Meta:
        index = ((('myself', 'my_friend'), True))
