import os
from flask import Flask
from flask_cors import CORS, cross_origin
from db import Database
def create_app(test_config=None):
        # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    CORS(app)

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    import movie, user, theatre
    app.register_blueprint(movie.movie_blueprint)
    app.register_blueprint(user.user_blueprint)
    app.register_blueprint(theatre.theatre_blueprint)

    @app.route('/hello')
    def hello():
        return 'Hello, World!'

    return app