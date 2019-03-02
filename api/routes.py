"""Includes all routes used in application"""
from flask import Blueprint, jsonify, request, session

from app.models import User, Team, Workout, Posted, Friend

from playhouse.shortcuts import model_to_dict

users = Blueprint('users', __name__, url_prefix='/api/users/')

@app.route('/', methods=['GET'])
def list_feed(user_id):
    """lists workout feed of posts"""
    feed = []
    user_friends = [Friend.select().where(Friend.user == user_id)]
    for friend in user_friends:
        friend_posts = [Posted.select().where(Posted.user == friend.user_id).order_by(Post.date)]
        for post in friend_posts:
            feed.append(model_to_dict(post))
    """sort posts by date?"""
    return jsonify(feed), 200

def create_workout(user_id):
    return 0

@app.route('/friends', methods=['GET', 'POST'])
def list_friends(user_id):
    friends = [Friend.select().where(Friend.user == user_id)]
    return jsonify(friends), 200

def make_friend(user_id):

    return str(e), 400

@app.route('/team', methods=['GET'])
def list_team_members(user_id):
    members = []

