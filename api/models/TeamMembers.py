"""All of the team members"""

from models import BaseModel, User, Team
from playhouse.postgres_ext import ForeignKeyField, BooleanField


class TeamMembers(BaseModel):
    member = ForeignKeyField(User)
    team = ForeignKeyField(Team)
    is_manager = BooleanField(default=False)

    class Meta:
        index = ('user', 'team', 'manages')
