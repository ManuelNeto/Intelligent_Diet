from flask import Flask, request
from flask_cors import CORS, cross_origin
from flask_restful import Resource, Api
from json import dumps
from flask_jsonpify import jsonify
from pymongo import MongoClient

app = Flask(__name__)
api = Api(app)

CORS(app)

cliente = MongoClient('localhost', 27017)
banco = cliente['intelligentDiet']
alimentos = banco['alimentos']

@app.route("/generateDiet", methods=['POST'])
def generateDiet():
  info = request.data
  return jsonify(info)

if __name__ == '__main__':
   app.run(port=5002)