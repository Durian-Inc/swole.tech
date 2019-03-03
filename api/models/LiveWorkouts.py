"""All of the live workouts"""
from playhouse.postgres_ext import CompositeKey, ForeignKeyField

from models import BaseModel, User, Workout


class LiveWorkouts(BaseModel):
    user = ForeignKeyField(User)
    workout = ForeignKeyField(Workout)

    class Meta:
        primary_key = CompositeKey('user', 'workout')
