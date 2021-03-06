"""Includes all routes used in application"""
from flask import jsonify, request
from playhouse.shortcuts import model_to_dict

from models import Buddies, Posted, Team, User, Workout
from serve import app
from utils import (add_friend, add_user_to_team, create_team, get_user_info,
                   get_workout, list_all_teams, list_all_user_teams,
                   list_friends, list_live, list_posts, list_users, post_post,
                   post_workout, update_workout)


@app.route('/users/<username>', methods=['GET', 'POST'])
def list_feed(username):
    """lists workout feed of posts"""
    lives = list_live(username)
    feed = list_posts(username)
    sort_feed = sorted(feed, key=lambda k: k['date'])
    return jsonify(feed=sort_feed, live=lives)


@app.route('/workouts', methods=['POST'])
def workout():
    submission = post_workout(request.get_json())
    return jsonify(submission=submission)


@app.route('/workouts/<workout_id>', methods=['GET', 'PATCH'])
def workout_info(workout_id):
    """Info on workout after selecting from feed"""
    workout = None
    if request.method == 'GET':
        workout = get_workout(workout_id)
    elif request.method == 'PATCH':
        workout = update_workout(workout_id)
    return jsonify(model_to_dict(workout))


@app.route('/profile/<user_name>', methods=['GET'])
def user_info(user_name):
    """
        User's information
        name & photo
    """
    user_info = get_user_info(user_name)
    return jsonify(user_info)


@app.route('/profile/<username>/lives', methods=['GET'])
def user_lives(username):
    lives = list_live(username)
    return jsonify(lives)


@app.route('/profile/<user_name>/friends', methods=['GET'])
def friends(user_name):
    """lists all of user's friends"""
    friends = list_friends(user_name)
    return jsonify(friends)


@app.route('/profile/<user_name>/friends', methods=['POST'])
def become_friends(user_name):
    """lists all of user's friends"""
    friends = add_friend(user_name, request.get_json())
    return jsonify(friends)


@app.route('/users/', methods=['GET'])
def all_users():
    """lists all of user's friends"""
    users = list_users()
    return jsonify(users)


@app.route('/teams/<member>', methods=['GET', 'POST', 'PATCH'])
def teams(member):
    teams = []
    if request.method == 'GET':
        teams = list_all_user_teams(member)
    elif request.method == 'POST':
        teams = create_team(request.get_json())
    elif request.method == 'PATCH':
        teams = add_user_to_team(request.get_json())
    return jsonify(teams)


@app.route('/teams/', methods=['GET'])
def all_teams():
    teams = []
    teams = list_all_teams()
    return jsonify(teams)


@app.route('/post/<username>', methods=['POST'])
def post(username):
    post = post_post(username, request.get_json())
    return jsonify(post)
