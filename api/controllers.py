"""Includes all routes used in application"""
from datetime import datetime

from flask import jsonify, request

from models import Buddies, Posted, Team, User, Workout
from playhouse.shortcuts import model_to_dict
from serve import app
from utils import list_live, list_posts

print('here')


@app.route('/users/<username>', methods=['GET', 'POST'])
def list_feed(username):
    """lists workout feed of posts"""
    lives = list_live(username)
    feed = list_posts(username)
    sort_feed = sorted(feed, key=lambda k: k['date'])
    return jsonify(feed=sort_feed, live=lives)


@app.route('/workout', methods=['POST', 'PATCH'])
def workout():
    if request.method == 'POST':
        # ToDo: Post workout function passed request dict
        #   post_workout(request_dict)
        pass
    elif request.method == 'PATCH':
        # ToDo: Send workout id to DB to upadte values from request
        #    create_workout(id, values):
        pass
    return "Some workout"


@app.route('/profile/<user_name>', methods=['GET'])
def user_info(user_name):
    """user information and all posts"""
    # ToDo: List all user informatinon
    #   get_user_info(user_name)
    pass
    return "Their info"


@app.route('/<user_name>/friends', methods=['GET'])
def list_friends(user_name):
    """lists all of user's friends"""
    # ToDo: List all of the friends for the user
    #   list_all_friends(user_name)
    pass
    return "Friends go here"


@app.route('/teams', methods=['GET', 'POST', 'PATCH'])
def teams():
    if request.method == 'GET':
        # ToDo: list all of the teams the members associate with them
        #   list_all_teams()
        pass
    elif request.method == 'POST':
        # ToDo: Create a new team using the request
        #   create_team(request_info)
        pass
    elif request.method == 'PATCH':
        # ToDo: Add a user to the provided team
        #   add_user_to_team(team_name, user_name)
        pass
    return "Teams are here"


@app.route('/workout/<workout_id>', methods=['GET'])
def workout_info(workout_id):
    """info on workout after selecting from feed"""
    # ToDo: Return info on the workout here
    #   get_workout(workout_id)
    return "Workout info go here"
