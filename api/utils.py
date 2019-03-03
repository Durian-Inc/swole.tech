from models import Buddies, Post, Posted
from playhouse.shortcuts import model_to_dict


def list_posts(username):
    posts = []
    buddies = [
        buddy for buddy in Buddies.select().where(Buddies.myself == username)
    ]
    buddies.append(username)
    for buddy in buddies:
        posts += [
            model_to_dict(post.post)
            for post in Posted.select().where(Posted.user == buddy)
        ]
    return posts
