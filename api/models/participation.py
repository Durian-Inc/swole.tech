"""The relationship between a User and a Chat"""

from app.models import BaseModel, User, Chat
from playhouse.postgres_ext import ForeignKeyField


class Participation(BaseModel):
    team = ForeignKeyField(Workout)
    user = ForeignKeyField(User)
