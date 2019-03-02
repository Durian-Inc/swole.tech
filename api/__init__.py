from api.serve import app


@app.errorhandler(404)
def not_found(error):
    return error, 404
