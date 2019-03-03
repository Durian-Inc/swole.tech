"""All of the util functions"""
from playhouse.shortcuts import model_to_dict

from models import Buddies, LiveWorkouts, Posted, Workout, User


def get_workout(workout_id):
    return Workout.get(Workout.id == workout_id)


def post_workout(workout_values):
    try:
        Workout.create(
            name=workout_values['name'],
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
    posts = []
    buddies = [
        str(buddy)
        for buddy in Buddies.select().where(Buddies.myself == username)
    ]
    buddies.append(username)
    for buddy in buddies:
        posts += [
            model_to_dict(post.post)
            for post in Posted.select().where(Posted.user == buddy)
        ]
    return posts


def list_live(username):
    lives = []
    buddies = [
        str(buddy.my_friend)
        for buddy in Buddies.select().where(Buddies.myself == username)
    ]
    buddies.append(username)
    print(buddies)
    for buddy in buddies:
        lives += [
            model_to_dict(workout.workout)
            for workout in LiveWorkouts.select().where(
                LiveWorkouts.user == buddy)
        ]
    return lives

def get_user_info(user_name):
    return User.get(User.name == user_name)


def list_friends(username):
    buddies = [
        str(buddy.my_friend)
        for buddy in Buddies.select().where(Buddies.myself == username)
    ]
    return buddies
