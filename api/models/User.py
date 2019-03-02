"""All registered users are input into this model"""
from datetime import datetime

from app.models import BaseModel
from playhouse.postgres_ext import CharField, PrimaryKeyField, JSONField, ForeignKeyField


class User(BaseModel):
    id = PrimaryKeyField()
    display_name = CharField()
    photo = CharField(null=True)
    feed = JSONField(default=[])
    workout = ForeignKeyField(Workout)
    friends = JSONField(default=[])