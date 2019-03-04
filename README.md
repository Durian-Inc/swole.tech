# SwoleTech - Centralized workout sharing platform
> Created for PickHacks 2019 by Durian Inc.      
Team: Clay McGinnis, David Gardiner, Innocent Niyibizi, Katie Pitz      
> http://swole.tech/
## Purpose
This app will make creating and sharing a workout as easy as a click of a few buttons.

# Installation
### Clone this repository
```
git clone https://github.com/Durian-Inc/SwoleTech/
```

### Install dependencies
* Server
  * Python 3.X
  * pip3
  * PostgreSQL
  * pipenv `pip3 install pipenv`
* Client
  * Node.js
  * npm / yarn

### Additional installation instructions
#### Server
Before running the server you will need to copy the `api/.env-format` file to `api/.env` and add the relevant information about your PostgreSQL server, this includes IP of the instance, name of database, credentials, etc.
```bash
# Install required pip packages to virtual environment
pipenv install

# Start the server in debug mode
pipenv run python3 api/run.py
```
#### Client
```bash
# Install required npm packages to directory
yarn install
or
npm install

# Start the server in debug mode
yarn start
or
npm run start

Go to: http://localhost:3000
```

## Troubleshooting
Browse and create issues: https://github.com/Durian-Inc/SwoleTech/issues

## License
License: MIT License
