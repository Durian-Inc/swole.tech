"""All of the users' posts"""
from models import BaseModel, User, Post
from playhouse.postgres_ext import ForeignKeyField


class Posted(BaseModel):
    user = ForeignKeyField(User)
    post = ForeignKeyField(Post)

    class Meta:
        index = ('user', 'post')
