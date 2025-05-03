from flask import Flask, request, jsonify # requestと jsonifyもインポート忘れずに
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)

# Database configuration
app.config["SQLALCHEMY_DATABASE_URI"] = (
    "postgresql://postgres:sqlalchemy_password@localhost/postgres"
)
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)


# Define Models
class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return (
            f"<User {self.name}>"  # Define a string representation for the User model
        )


# define a default route
@app.route("/")
def hello_world():
    return {"message": "Hello, Flask!"}

@app.route("/user", methods=["POST"])
def add_user():
    data = request.get_json()
    if not data or "name" not in data or "email" not in data:
        return (
            jsonify({"error": "Invalid input"}),
            400,
        )  # Return an error if the input is invalid

    new_user = User(name=data["name"], email=data["email"])
    db.session.add(new_user)  # Add the new user to the session
    db.session.commit()  # Commit the new user to the database

    return (
        jsonify(
            {
                "message": "User added successfully",
                "user": {
                    "id": new_user.id,
                    "name": new_user.name,
                    "email": new_user.email,
                },
            }
        ),
        201,
    )


if __name__ == "__main__":
    # Create the database tables
    with app.app_context():
        db.create_all()
    app.run(debug=True)
