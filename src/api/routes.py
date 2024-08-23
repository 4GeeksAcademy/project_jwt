from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
@jwt_required()
def handle_hello():
    user = get_jwt_identity()
    print(user)

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/register', methods=['POST'])
def register():
    data_user = request.json
    user = User()
    new_user = user.create_user(email=data_user["email"], password=data_user["password"])
    print(new_user)
    return jsonify({"msg": "Your registration has been successful, congratulations!"})

@api.route('/login', methods=['POST'])
def login(): 
    data_user = request.json
    user = User.query.filter_by(email=data_user["email"]).first()
    if user and user.check_password(password=data_user["password"]):
        access_token = create_access_token(identity=user.serialize())
        return jsonify({"token": access_token, "msg": "WELCOME!"})
    else:
        return jsonify({"msg": "Invalid email or password"}), 401
    

