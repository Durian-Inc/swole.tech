"""Group of Users"""

from models import BaseModel, User
from playhouse.postgres_ext import CharField, JSONField, PrimaryKeyField, ForeignKeyField


class Team(BaseModel):
    id = PrimaryKeyField()
    display_name = CharField()
    members = JSONField(default=[])
    manager = ForeignKeyField(User)
    workouts = JSONField(default=[])
