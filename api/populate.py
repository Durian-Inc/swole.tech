from datetime import datetime

from models import (Buddies, LiveWorkouts, Post, Posted, Team, TeamMembers,
                    User, Workout)


def populate_db():
    comments = [{
        'name': 'Innocent Niyibizi',
        'text': 'This is some really cool rips brooo'
    }, {
        'name': 'Katie Pitz',
        'text': 'You need more pump, bro'
    }]
    exercises = [{
        'name': 'Squat',
        'weight': 130,
        'reps': 10
    }, {
        'name': 'Bench Press',
        'weight': 130,
        'reps': 10
    }, {
        'name': 'Run',
        'distance': 1
    }]
    try:
        # Creating a few users
        first_user = User.create(name='bob', photo='https://bit.ly/2ILwmyk')
        second_user = User.create(name='kim', photo='https://bit.ly/2C1e0DA')
        third_user = User.create(name='kimmy', photo='https://bit.ly/2C1e0DA')
        fourth_user = User.create(name='tom', photo='https://bit.ly/2C1e0DA')

        # Creating a few friendships
        Buddies.create(myself=first_user, my_friend=second_user)
        Buddies.create(myself=second_user, my_friend=first_user)
        Buddies.create(myself=third_user, my_friend=fourth_user)
        Buddies.create(myself=fourth_user, my_friend=third_user)

        # Creating workouts and one live workout!
        first_workkout = Workout.create(
            name='Swole!',
            end_time=datetime.now().isoformat(),
            creator=first_user.name,
            category='Arm',
            exercises=exercises)
        LiveWorkouts.create(user=first_user, workout=first_workkout)
        next_workkout = Workout.create(
            name='Swole!!',
            end_time=datetime.now().isoformat(),
            creator=second_user.name,
            category='Arm',
            end_date=datetime.now().isoformat(),
            exercises=exercises)
        # Creating a single post
        post = Post.create(
            photo='https://bit.ly/2INxktU',
            caption='I am way toooo Swole!!',
            original_workout=next_workkout,
            comments=comments)
        Posted.create(user=second_user, post=post)

        # Creating a team!!
        swole_team = Team.create(name='Swole Team 6')
        TeamMembers.create(member=first_user, team=swole_team, is_manager=True)
        TeamMembers.create(member=second_user, team=swole_team)
        TeamMembers.create(member=third_user, team=swole_team)
        TeamMembers.create(member=fourth_user, team=swole_team)

    except Exception as e:
        return e
