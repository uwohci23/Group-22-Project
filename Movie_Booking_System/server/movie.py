from flask import Blueprint, request, jsonify

# from api.db import MovieDatabase
from db import Database

movie_blueprint = Blueprint('movie', __name__, url_prefix='/movie')
db = Database()

# GET /movie/<movie_id>
@movie_blueprint.route('/<movie_id>', methods=['GET'])
def get_movie(movie_id: str):
    data = db.get_movie(movie_id)

    # If the movie doesn't exist, return a 404
    if data is None:
        return jsonify({
            'status': False,
            'message': 'Movie not found',
        }), 404
    
    # Otherwise, return the movie data
    return jsonify(data), 200

# GET /movie/list
@movie_blueprint.route('/list', methods=['GET'])
def get_all_movies():
    data = db.get_all_movies()

    # If there are no movies, return a 404
    if data is None:
        return jsonify({
            'status': False,
            'message': 'No movies found',
        }), 404
    
    # Otherwise, return the movie data
    return jsonify(data), 200

# POST /movie/book
@movie_blueprint.route('/book', methods=['POST'])
def book_movie():
    # {
    #     "user_id": "1",
    #     "movie_id": "1",
    #     "movie_title": "The Matrix",
    #     "seat_row": "1",
    #     "seat_column": "1"
    # }
    # Get the movie data from the request
    data = request.get_json()

    # book the movie
    result = db.add_seats(data['movie_title'], data['seat_row'], data['seat_column'], 1)

    # If the movie doesn't exist, return a 404
    if not result:
        return jsonify({
            'status': False,
            'message': 'Movie not found',
        }), 404
    
    # Return a success message
    return jsonify({
        'status': True,
        'message': 'Movie booked',
    }), 201

# POST /movie/add
@movie_blueprint.route('/add', methods=['POST'])
def add_movie():
    # Get the movie data from the request
    data = request.get_json()

    # add the movie to the database
    result = db.add_movie(data['title'], data['image_url'], data['release_date'], data['age_rating'])

    # If the movie already exists, return a 409
    if not result:
        return jsonify({
            'status': False,
            'message': 'Movie already exists',
        }), 409
    
    # add a theater for the movie
    result = db.add_theatre(data['title'], 200)

    # Return a success message
    return jsonify({
        'status': True,
        'message': 'Movie added',
    }), 201