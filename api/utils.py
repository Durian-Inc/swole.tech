"""All of the util functions"""

from models import Workout, Buddies, Post, Posted
from playhouse.shortcuts import model_to_dict


def get_workout(workout_id):
    return Workout.get(Workout.id == workout_id)


def post_workout(workout_values):
    try:
        Workout.create(name=workout_values['name'], 
                       creator=workout_values['creator'],
                       category=workout_values['category'],
                       exercises=workout_values['exercises'])
        return True
    except Exception as e:
        return e


def update_workout(id, values):
    try:
        for key in values.keys():
            workout = Workout.update({key: values[key]}).where(Workout.id == id)
            workout.execute()
        return Workout.get(Workout.id == id)
    except Exception as e:
        return e


def list_posts(username):
    posts = [
        model_to_dict(post.post)
        for post in Posted.select().where(Posted.user == username)
    ]
    print([
        model_to_dict(post)
        for post in Posted.select().where(Posted.user == username.lower())
    ])
    buddies = [
        buddy for buddy in Buddies.select().where(Buddies.myself == username)
    ]
    for buddy in buddies:
        posts += [
            model_to_dict(post.post)
            for post in Posted.select().where(Posted.user == buddy)
        ]
    print(posts)
    return posts
