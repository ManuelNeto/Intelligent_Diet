from flask import Flask, request
from flask_cors import CORS, cross_origin
from flask_restful import Resource, Api
from json import dumps
from flask_jsonpify import jsonify
from pymongo import MongoClient
import math
import sys
import json
import random
from deap import creator, base, tools, algorithms
import matplotlib.pyplot as plt

app = Flask(__name__)
api = Api(app)

CORS(app)

cliente = MongoClient('localhost', 27017)
banco = cliente['intelligentDiet']
alimentos = banco['alimentos']

#def getDiets(data):

@app.route("/generateDiet", methods=['POST'])
def generateDiets():
  diets = getDiets(request.data)
  return jsonify(diets)

if __name__ == '__main__':
   app.run(port=5002)
