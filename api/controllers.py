"""Includes all routes used in application"""
from datetime import datetime

from flask import jsonify, request
from playhouse.shortcuts import model_to_dict

from models import Buddies, Posted, Team, User, Workout
from serve import app
from utils import (get_workout, list_live, list_posts, post_workout,
                   update_workout, list_friends, get_user_info, list_all_teams,
                   create_team, add_user_to_team)


@app.route('/users/<username>', methods=['GET', 'POST'])
def list_feed(username):
    """lists workout feed of posts"""
    lives = list_live(username)
    feed = list_posts(username)
    sort_feed = sorted(feed, key=lambda k: k['date'])
    return jsonify(feed=sort_feed, live=lives)


@app.route('/workout', methods=['POST'])
def workout():
    submission = False
    if request.method == 'POST':
        submission = post_workout(request.form)
    return jsonify(submission=submission)


@app.route('/workout/<workout_id>', methods=['GET', 'PATCH'])
def workout_info(workout_id):
    """Info on workout after selecting from feed"""
    workout = None
    if request.method == 'GET':
        workout = get_workout(workout_id)
    elif request.method == 'PATCH':
        workout = update_workout(workout_id, request.form)
    return jsonify(model_to_dict(workout))


@app.route('/profile/<user_name>', methods=['GET'])
def user_info(user_name):
    """user information and all posts"""
    user_info = get_user_info(user_name)
    return jsonify(model_to_dict(user_info))


@app.route('/<user_name>/friends', methods=['GET'])
def friends(user_name):
    """lists all of user's friends"""
    friends = list_friends(user_name)
    return jsonify(values=friends)


@app.route('/teams', methods=['GET', 'POST', 'PATCH'])
def teams():
    teams = []
    if request.method == 'GET':
        teams = list_all_teams()
    elif request.method == 'POST':
        teams = create_team(request.form)
    elif request.method == 'PATCH':
        teams = add_user_to_team(request.form)
    return jsonify(teams)
