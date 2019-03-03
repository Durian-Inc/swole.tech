"""Runs the server"""
from serve import app
import controllers

if __name__ == '__main__':
    app.run(debug=True, host='localhost', port=8080)
