from flask import Blueprint, request, jsonify

from db import Database

theatre_blueprint = Blueprint('theatre', __name__, url_prefix='/theatre')
db = Database()

# GET /theatre/<theatre_id>
@theatre_blueprint.route('/<theatre_id>', methods=['GET'])
def get_theatre(theatre_id: str):
    data = db.get_theatre(theatre_id)

    # If the theatre doesn't exist, return a 404
    if data is None:
        return jsonify({
            'status': False,
            'message': 'Theatre not found',
        }), 404
    
    # Otherwise, return the theatre data
    return jsonify(data), 200

# GET /theatre/seats/<movie_title>
@theatre_blueprint.route('/seats/<movie_title>', methods=['GET'])
def get_seats(movie_title: str):
    data = db.get_seats(movie_title)

    # If the theatre doesn't exist, return a 404
    if data is None:
        return jsonify({
            'status': False,
            'message': 'Theatre not found',
        }), 404
    
    # Otherwise, return the theatre data
    return jsonify(data), 200