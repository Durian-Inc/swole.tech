"""All of the util functions"""

from models import Workout
from playhouse.shortcuts import model_to_dict


def get_workout(workout_id):
    workout = Workout.get(Workout.id == workout_id)
    print(model_to_dict(workout))
    return workout


def post_workout(workout_values):
    try:
        Workout.create(name=workout_values['name'], 
                       creator=workout_values['creator'],
                       exercises=workout_values['exercises'])
        return None
    except Exception as e:
        return e


def update_workout(id, values):
    try:
        for key in values.keys():
            Workout.update(key=values[key]).where(Workout.id == id)
    except Exception as e:
        return e
