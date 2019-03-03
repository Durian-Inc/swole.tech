"""All of the util functions"""
from playhouse.shortcuts import model_to_dict

from models import (Buddies, LiveWorkouts, Posted, Team, TeamMembers, User,
                    Workout)


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


def update_workout(id, values):
    try:
        for key in values.keys():
            workout = Workout.update({
                key: values[key]
            }).where(Workout.id == id)
            workout.execute()
        return model_to_dict(Workout.get(Workout.id == id))
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
    return User.get(User.name == user_name)


def list_friends(username):
    buddies = [
        str(buddy.my_friend)
        for buddy in Buddies.select().where(Buddies.myself == username)
    ]
    return buddies


def list_all_teams():
    return [model_to_dict(team) for team in TeamMembers.select().execute()]


def list_all_user_teams(member_name):
    user = User.select().where(User.name == member_name).execute()
    try:
        teams_and_managers = {}
        teams = TeamMembers.select().where(TeamMembers.member == user[0].name).execute()
        for team in teams:
            manager = TeamMembers.select().where(TeamMembers.is_manager)
            teams_and_managers[str(team.team)] = model_to_dict(manager[0].member)
        return teams_and_managers
    except IndexError:
        return {}


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
