"""The relationship between a User and another User"""

from app.models import BaseModel, User
from playhouse.postgres_ext import ForeignKeyField


class ForeignKeyField(BaseModel):
    friend = ForeignKeyField(User)
