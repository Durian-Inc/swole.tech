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
        'meta': 10
    }, {
        'name': 'Bench Press',
        'meta': 10
    }, {
        'name': 'Run',
        'meta': 1
    }]
    # Creating a few users
    first_user = User.create(name='bob', photo='https://bit.ly/2ILwmyk')
    second_user = User.create(name='kim', photo='https://bit.ly/2C1e0DA')
    third_user = User.create(name='kimmy', photo='https://bit.ly/2C1e0DA')
    fourth_user = User.create(name='tom', photo='https://bit.ly/2C1e0DA')
    fifth_user = User.create(name='greg', photo='https://bit.ly/2C1e0DA')

    # Creating a few friendships
    Buddies.create(myself=first_user, my_friend=second_user)
    Buddies.create(myself=second_user, my_friend=first_user)
    Buddies.create(myself=third_user, my_friend=fourth_user)
    Buddies.create(myself=fourth_user, my_friend=third_user)
    Buddies.create(myself=first_user, my_friend=fifth_user)
    Buddies.create(myself=fifth_user, my_friend=first_user)

    # Creating workouts and one live workout!
    first_workout = Workout.create(
        name='Get That Arm Day',
        end_time=datetime.now().isoformat(),
        creator=first_user.name,
        category='Arms',
        exercises=exercises)
    LiveWorkouts.create(user=first_user, workout=first_workout)
    next_workout = Workout.create(
        name='LEGGO MY EGGO',
        end_time=datetime.now().isoformat(),
        creator=second_user.name,
        category='Legs',
        end_date=datetime.now().isoformat(),
        exercises=exercises)
    LiveWorkouts.create(user=second_user, workout=next_workout)
    third_workout = Workout.create(
        name='Training day!!',
        end_time=datetime.now().isoformat(),
        creator=fifth_user.name,
        category='Soccer',
        end_date=datetime.now().isoformat(),
        exercises=exercises)
    LiveWorkouts.create(user=fifth_user, workout=third_workout)
    # Creating a single post
    post = Post.create(
        photo='https://bit.ly/2INxktU',
        caption='I am way toooo Swole!!',
        original_workout=next_workout,
        comments=comments)
    Posted.create(user=second_user, post=post)
    post1 = Post.create(
        photo=
        'https://st3.depositphotos.com/3812753/19053/i/1600/depositphotos_190532078-stock-photo-emotional-picture-of-strong-guy.jpg',
        caption='Practicing my dinner ettiquette',
        original_workout=third_workout,
        comments=comments)
    Posted.create(user=fifth_user, post=post1)

    # Creating a team!!
    swole_team = Team.create(name='Swole Team 6')
    TeamMembers.create(member=first_user, team=swole_team, is_manager=True)
    TeamMembers.create(member=second_user, team=swole_team)
    TeamMembers.create(member=third_user, team=swole_team)
    TeamMembers.create(member=fourth_user, team=swole_team)
