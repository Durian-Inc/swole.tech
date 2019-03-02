"""All of the buddies"""
from models import BaseModel, User
from playhouse.postgres_ext import ForeignKeyField


class Buddies(BaseModel):
    first_friend = ForeignKeyField(User, backref='Buddies')
    second_friend = ForeignKeyField(User, backref='Buddies')

    class Meta:
        index = ('user', 'user')
