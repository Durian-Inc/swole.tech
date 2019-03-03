"""All of the buddies"""
from models import BaseModel, User
from playhouse.postgres_ext import CompositeKey, ForeignKeyField


class Buddies(BaseModel):
    myself = ForeignKeyField(User)
    my_friend = ForeignKeyField(User)

    class Meta:
        primary_key = CompositeKey('myself', 'my_friend')
