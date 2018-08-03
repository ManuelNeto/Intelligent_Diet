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

app = Flask(__name__)
api = Api(app)

CORS(app)

cliente = MongoClient('localhost', 27017)
banco = cliente['intelligentDiet']
alimentos = banco['alimentos']

def getDiets(info, percentage):
	data = info['preferences']
	protein_reference = info['protein']*percentage
	fat_reference = info['fat']*percentage
	carb_reference = info['carbo']*percentage

	protein = "proteina"
	fat = "gordura"
	carb = "carboidrato"
	NGENES = len(data)
	NGENERATIONS=50
	NPOPULATION=200

	creator.create("FitnessMax", base.Fitness, weights=(1.0,))
	creator.create("Individual", list, fitness=creator.FitnessMax)

	toolbox = base.Toolbox()

	toolbox.register("attr_bool", random.randint, 0, 1)
	toolbox.register("individual", tools.initRepeat, creator.Individual, toolbox.attr_bool, n=NGENES)
	toolbox.register("population", tools.initRepeat, list, toolbox.individual)
		
	def fitness(individual):
	    protein_sum = 0
	    carb_sum = 0
	    fat_sum = 0
	    for i in range(NGENES):
		protein_sum = protein_sum + individual[i] * data[i][protein]
	    for i in range(NGENES):
		carb_sum = carb_sum + individual[i] * data[i][carb]
	    for i in range(NGENES):
		fat_sum = fat_sum + individual[i] * data[i][fat]
	    
	    diffProtein = (1.*min(protein_reference,protein_sum) / max(protein_reference, protein_sum))
	    diffCarb = (1.*min(carb_reference, carb_sum) / max(carb_reference , carb_sum))
	    diffFat = (1.*min(fat_reference, fat_sum) / max(fat_reference, fat_sum))
	    
	    value = (diffProtein + diffCarb + diffFat) * min (diffProtein, diffCarb, diffFat)
            
	    v = min (diffProtein, diffCarb, diffFat)
	    
	    return v,
	    
	toolbox.register("evaluate", fitness)
	toolbox.register("mate", tools.cxTwoPoint)
	toolbox.register("mutate", tools.mutFlipBit, indpb=0.01)
	toolbox.register("select", tools.selTournament, tournsize=10)

	population = toolbox.population(n=NPOPULATION)

	pro = []
	car = []
	gor = []
	lista = []
	i = 1

	aux = population

	for gen in range(NGENERATIONS):
	    a = fitness(population[0])
	    pro.append(a)
	    lista.append(i)
	    i = i + 1
	    
	    offspring = algorithms.varAnd(population, toolbox, cxpb=0.5, mutpb=0.1)
	    fits = toolbox.map(toolbox.evaluate, offspring)
	    for fit, ind in zip(fits, offspring):
		ind.fitness.values = fit
	    population = toolbox.select(offspring, k=len(population))

	response = []
	for i in xrange(len(population[0])):
		if (population[0][i] == 1):
			response.append(data[i]);

		print '@@@@@@@@@@@@@@@@@'	
	protein_sum = 0
        carb_sum = 0
        fat_sum = 0
	for i in range(NGENES):
	    protein_sum = protein_sum + population[0][i] * data[i][protein]
	for i in range(NGENES):
	    carb_sum = carb_sum + population[0][i] * data[i][carb]
	for i in range(NGENES):
            fat_sum = fat_sum + population[0][i] * data[i][fat]
	print 'proteinas: ' + str(protein_sum)
	print 'proteinas esperadas: ' + str(protein_reference)
	print 'carb: ' + str(carb_sum)
	print 'carb esperados: ' + str(carb_reference)
	print 'gordura: ' + str(fat_sum)
	print 'gordura esperada: ' + str(fat_reference)
	
	return response

@app.route("/generateDiet", methods=['POST'])
def generateDiets():
  breakfast = getDiets(json.loads(request.data), 0.15)
  lunch = getDiets(json.loads(request.data), 0.35)
  dinner = getDiets(json.loads(request.data), 0.35)
  snack = getDiets(json.loads(request.data), 0.15)
  return jsonify({"breakfast": breakfast, "lunch": lunch, "dinner": dinner, "snack": snack })

if __name__ == '__main__':
   app.run(port=5002)
