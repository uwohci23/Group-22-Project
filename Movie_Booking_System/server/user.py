from flask import Blueprint, request, jsonify
from db import Database
from login import LoginServer

user_blueprint = Blueprint('user', __name__, url_prefix='/user')
db = Database()
login_server = LoginServer()



@user_blueprint.route('/<user_id>/bookmarklist',methods=['GET'])
def get_bookmarks(user_id: str):
    data = db.get_bookmarks(user_id)
    # If the user doesn't exist, return a 404
    print(data)
    if data is None:
        return jsonify({
            'status': False,
            'message': 'User not found',
        }), 404
    
    # Otherwise, return the user data
    return jsonify(data), 200


# POST /user/register
@user_blueprint.route('/register', methods=['POST'])
def add_user():
    # Get the user data from the request
    data = request.get_json()

    if data['username'] == '' or data['password'] == '' or data['email'] == '' or data['first_name'] == '' or data['last_name'] == '':
        return jsonify({
            'status': False,
            'message': 'Invalid input',
        }), 400


    # add the user to the database
    # result = db.add_user(data['user_id'], data['username'])

    priv_key = login_server.derive_secret_key(data['username'], data['password'])
    # encrypted_password = login_server.encrypt(priv_key, data['password'])
    hash_password = login_server.encryptPassword(data['username'], data['password']).hex()

    result = db.add_user(data['username'], priv_key, hash_password,
        data['email'], data['first_name'], data['last_name'], data['admin_status'])

    # If the user already exists, return a 409
    if not result:
        return jsonify({
            'status': False,
            'message': 'User already exists',
        }), 409
    
    # Return a success message
    return jsonify({
        'status': True,
        'message': 'User added',
        'admin_status': data['admin_status'],
    }), 201

# POST /user/login
@user_blueprint.route('/login', methods=['POST'])
def login_user():
    # Get the user data from the request
    data = request.get_json()

    user = db.get_user_by_username(data['username'])
    
    if not user:
        return jsonify({
            'status': False,
            'message': 'Login failed',
        }), 401

    priv_key = user['priv_key']
    decrypted_password = login_server.decrypt(priv_key, bytes.fromhex(user['hash_password']))

    if decrypted_password == data['password']:
        return jsonify({
            'status': True,
            'message': 'Login successful',
            'admin_status': user['admin_status'],
            'userid': user['user_id']
        }), 200
    else:
        return jsonify({
            'status': False,
            'message': 'Login failed',
        }), 401

# POST /user/receipt
@user_blueprint.route('/receipt', methods=['POST'])
def add_receipt():
    # Get the receipt data from the request
    data = request.get_json()

    # add the receipt to the database
    result = db.add_receipt(data['ticket_id'], data['user_id'], data['total_tickets'])

    # If the receipt already exists, return a 409
    if not result:
        return jsonify({
            'status': False,
            'message': 'Receipt already exists',
        }), 409
    
    # Return a success message
    return jsonify({
        'status': True,
        'message': 'Receipt added',
    }), 201

@user_blueprint.route('/bookmark/add',methods=['POST'])
def add_bookmark():
    data = request.get_json()

    result = db.add_bookmark(data['user_id'], data['movie_id'])

    if not result:
        return jsonify({
            'status': False,
            'message': 'Bookmark failed',
        }), 409
    
    return jsonify({
        'status': True,
        'message': 'Bookmark added',
    }), 201

@user_blueprint.route('/<user_id>', methods=['GET'])
def get_user(user_id: str):
    data = db.get_user_by_id(user_id)

    # If the user doesn't exist, return a 404
    if data is None:
        return jsonify({
            'status': False,
            'message': 'User not found',
        }), 404
    
    # Otherwise, return the user data
    return jsonify(data), 200

@user_blueprint.route('/bookmark/delete',methods=['DELETE'])
def delete_bookmark():
    data = request.get_json()

    result = db.delete_bookmark(data['user_id'], data['movie_id'])

    if not result:
        return jsonify({
            'status': False,
            'message': 'Bookmark cannot delete',
        }), 409
    
    return jsonify({
        'status': True,
        'message': 'Bookmark deleted',
    }), 201

@user_blueprint.route('/bookmarks',methods=['GET'])
def get_all_bookmarks():

    data = db.get_all_bookmarks()
    # If the user doesn't exist, return a 404
    if data is None:
        return jsonify({
            'status': False,
            'message': 'User not found',
        }), 404
    
    # Otherwise, return the user data
    return jsonify(data), 200

@user_blueprint.route('/list',methods=['GET'])
def get_all_users():
    data = db.get_all_users()
    print(jsonify(data))
    if data is None:
        return jsonify({
            'status': False,
            'message': 'User not found',
        }), 404
    
    
    # Otherwise, return the user data
    return jsonify(data), 200


@user_blueprint.route('/list/<username>',methods=['GET'])
def get_userid(username: str):
    data = db.get_user_by_username(username)
    if data is None:
        return jsonify({
            'status': False,
            'message': 'User not found',
        }), 404
    
    
    # Otherwise, return the user data
    return jsonify(data), 200
