from models import (User, Buddies, Post, LiveWorkouts, Posted,
                    Team, TeamMembers, Workout)
from datetime import datetime


def populate_db():
    try:
        # Creating a few users
        first_user = User.create(name='Bob', photo='https://bit.ly/2ILwmyk')
        second_user = User.create(name='Kim', photo='https://bit.ly/2C1e0DA')
        third_user = User.create(name='Kimmy', photo='https://bit.ly/2C1e0DA')
        fourth_user = User.create(name='Tom', photo='https://bit.ly/2C1e0DA')

        # Creating a few friendships
        Buddies.create(myself=first_user, my_friend=second_user)
        Buddies.create(myself=third_user, my_friend=fourth_user)

        # Creating workouts and one live workout!
        first_workkout = Workout.create(name='Swole!', end_time=datetime.now(),
                                        creator=first_user.name)
        LiveWorkouts.create(user=first_user, workout=first_workkout)

        # Creating a single post
        post = Post.create(photo='https://bit.ly/2NETYmP',
                           caption='I\'m so SWOLE!')
        Posted.create(user=first_user, post=post)

        # Creating a team!!
        swole_team = Team.create(name='Swole Team 6')
        TeamMembers.create(member=first_user, team=swole_team, is_manager=True)
        TeamMembers.create(member=second_user, team=swole_team)
        TeamMembers.create(member=third_user, team=swole_team)
        TeamMembers.create(member=fourth_user, team=swole_team)

    except Exception as e:
        return e
