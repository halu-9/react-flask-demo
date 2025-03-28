from flask import Flask
from flask_cors import CORS # It is necessary to import this module to enable CORS

app = Flask(__name__)
CORS(app) # This will enable CORS for all routes(only for development)

@app.route('/')
def hello_world():
    return {'message': 'Hello, Flask!'}

if __name__ == '__main__':
    app.run(debug=True)