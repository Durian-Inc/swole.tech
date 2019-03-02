"""All workouts are input into this model"""
from models import BaseModel, User, Team
from playhouse.postgres_ext import CharField, PrimaryKeyField, ForeignKeyField


class Workout(BaseModel):
    id = PrimaryKeyField()
    icon = CharField()
    creator = CharField()
    participants = ForeignKeyField(User)
    team = ForeignKeyField(Team)
