"""All of the util functions"""
from playhouse.shortcuts import model_to_dict

from models import (Buddies, LiveWorkouts, Posted, Team, TeamMembers, User,
                    Workout)

from datetime import datetime

def get_workout(workout_id):
    return Workout.get(Workout.id == workout_id)


def post_workout(workout_values):
    try:
        workout = Workout.create(
            name=workout_values['name'],
            creator=workout_values['creator'],
            category=workout_values['category'],
            exercises=workout_values['exercises'])
        return model_to_dict(workout)
    except Exception as e:
        print("ERROR", str(e))
        return e


def update_workout(id):
    try:
        workout = Workout.update({'end_time': datetime.now()}).where(Workout.id == id)
        workout.execute()
        return Workout.get(Workout.id == id)
    except Exception as e:
        print("HUGE", str(e))
        return str(e)


def list_posts(username):
    posts = []
    buddies = [
        str(buddy)
        for buddy in Buddies.select().where(Buddies.myself == username)
    ]
    buddies.append(username)
    for buddy in buddies:
        for post in Posted.select().where(Posted.user == buddy):
            post = model_to_dict(post.post)
            post["name"] = buddy
            posts.append(post)
    return posts


def list_live(username):
    lives = []
    buddies = [
        str(buddy.my_friend)
        for buddy in Buddies.select().where(Buddies.myself == username)
    ]
    buddies.append(username)
    # print(buddies)
    for buddy in buddies:
        lives += [
            model_to_dict(workout.workout)
            for workout in LiveWorkouts.select().where(
                LiveWorkouts.user == buddy)
        ]
    return lives


def get_user_info(user_name):
    user = model_to_dict(User.get(User.name == user_name))
    user["buddies"] = [
        model_to_dict(buddy.my_friend)
        for buddy in Buddies.select().where(Buddies.myself == user["name"])
    ]
    user["posts"] = []

    for post in Posted.select().where(Posted.user == user["name"]):
        post = model_to_dict(post.post)
        post["name"] = user["name"]
        user["posts"].append(post)

    return user


def list_friends(username):
    buddies = [
        model_to_dict(buddy.my_friend)
        for buddy in Buddies.select().where(Buddies.myself == username)
    ]
    return buddies


def list_all_teams():
    all_teams = Team.select().execute()
    teams = {}
    for team in all_teams:
        teams[team.name] = [
            str(member.member)
            for member in TeamMembers.select().where(TeamMembers.team == team)
        ]
    return teams


def create_team(team_values):
    try:
        Team.create(name=team_values['name'])
        return {"name": team_values['name']}
    except Exception as e:
        return e


def add_user_to_team(request_values):
    try:
        TeamMembers.create(
            member=request_values['member'], team=request_values['team'])
        return {request_values['team']: request_values['member']}
    except Exception as e:
        return e


def list_users():
    return [model_to_dict(user) for user in User.select()]
