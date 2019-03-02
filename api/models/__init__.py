"""All models for the application are exported here"""
from .BaseModel import BaseModel
from .User import User
from .Buddies import Buddies
from .Team import Team
from .TeamMembers import TeamMembers
from .Workout import Workout
from .LiveWorkouts import LiveWorkouts
from .Post import Post
from .Posted import Posted

tables = [User, Buddies, Team, TeamMembers, Workout,
          LiveWorkouts, Post, Posted]
