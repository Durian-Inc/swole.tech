"""All of the users' posts"""
from models import BaseModel, User, Post
from playhouse.postgres_ext import ForeignKeyField


class Posted(BaseModel):
    user = ForeignKeyField(User, backref='Posted')
    post = ForeignKeyField(Post, backref='Posted')

    class Meta:
        index = ('user', 'post')
