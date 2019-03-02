"""Includes all routes used in application"""
from flask import Blueprint, jsonify, request, session

from app.models import User, Team, Workout, Posted, Friend

from playhouse.shortcuts import model_to_dict

users = Blueprint('users', __name__, url_prefix='/api/users/')

@app.route('/', methods=['GET', 'POST'])
def list_feed(user_id):
    """lists workout feed of posts"""
    """content of post, content of workout in post"""
    """sort posts by date"""

def live_workouts(user_id):
    """friends live workouts, sorted by most recent start date"""


@app.route('/workout', methods=['POST', 'PATCH'])
def post(user_id):
    """posts workout"""

def create_workout(workout_id):
    """creates new live workout"""


@app.route('/<user_id>', methods=['GET'])
def user_info(user_id):
    """user information and all posts"""


@app.route('/<user_id>/friends', methods=['GET'])
def list_friends(user_id):
    """lists all of user's friends"""


@app.route('/teams', methods=['GET', 'POST', 'PATCH'])
def list_teams(user_id):
    """list all teams and team members"""

def create_team(user_id):
    """creates a new team"""


@app.route('/workout/<workout_id>', methods=['GET'])
def workout_info(workout_id):
    """info on workout after selecting from feed"""
