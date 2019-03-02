"""All of the team members"""

from models import BaseModel, User, Team
from playhouse.postgres_ext import ForeignKeyField, BooleanField


class TeamMembers(BaseModel):
    member = ForeignKeyField(User, backref='TeamMembers')
    team = ForeignKeyField(Team, backref='TeamMembers')
    is_manager = BooleanField()

    class Meta:
        index = ('user', 'team', 'manages')