"""All of the live workouts"""
from models import BaseModel, Workout, User
from playhouse.postgres_ext import ForeignKeyField


class LiveWorkouts(BaseModel):
    user = ForeignKeyField(User)
    workout = ForeignKeyField(Workout)

    class Meta:
        index = ('usesr', 'workout')
