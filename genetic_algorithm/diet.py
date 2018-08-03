import math
import sys
import json
import random
from deap import creator, base, tools, algorithms
import matplotlib.pyplot as plt

#protein_reference = random.randint(0, 500)
#fat_reference = random.randint(0, 500)
#carb_reference = random.randint(0, 500)

protein = "protein"
fat = "fat"
carb = "carb"
NGENES = len(data)
NGENERATIONS=100
NPOPULATION=200

creator.create("FitnessMax", base.Fitness, weights=(1.0,))
creator.create("Individual", list, fitness=creator.FitnessMax)

toolbox = base.Toolbox()

toolbox.register("attr_bool", random.randint, 0, 1)
toolbox.register("individual", tools.initRepeat, creator.Individual, toolbox.attr_bool, n=NGENES)
toolbox.register("population", tools.initRepeat, list, toolbox.individual)
        
def fitness(individual):
    protein_sum, carb_sum, fat_sum = 0, 0, 0
    
    for i in range(NGENES):
        protein_sum = protein_sum + individual[i] * data[i][protein]
    for i in range(NGENES):
        carb_sum = carb_sum + individual[i] * data[i][carb]
    for i in range(NGENES):
        fat_sum = fat_sum + individual[i] * data[i][fat]
    
    diffProtein = (1.*min(protein_reference,protein_sum) / max(protein_reference, protein_sum))
    diffCarb = (1.*min(carb_reference, carb_sum) / max(carb_reference , carb_sum))
    diffFat = (1.*min(fat_reference, fat_sum) / max(fat_reference, fat_sum))
    
    v = min (diffProtein, diffCarb, diffFat)  
    return v,
    
toolbox.register("evaluate", fitness)
toolbox.register("mate", tools.cxTwoPoint)
#toolbox.register("mutate", tools.mutFlipBit, indpb=0.01)
toolbox.register("mutate", tools.mutFlipBit, indpb=0.01)
#toolbox.register("select", tools.selTournament, tournsize=3)
toolbox.register("select", tools.selRoulette, tournsize=3)

population = toolbox.population(n=NPOPULATION)

pro, car, gor = [], [], []
lista = []
i = 1

aux = population

for gen in range(NGENERATIONS):
    
    a = fitness(population[0])
    pro.append(a)
    #car.append(b)
    #gor.append(c)
    lista.append(i)
    i = i + 1
    
    #offspring = algorithms.varAnd(population, toolbox, cxpb=0.5, mutpb=0.1)
    offspring = algorithms.varAnd(population, toolbox, cxpb=0.5, mutpb=0.1)
    fits = toolbox.map(toolbox.evaluate, offspring)
    for fit, ind in zip(fits, offspring):
        ind.fitness.values = fit
    population = toolbox.select(offspring, k=len(population))

a = fitness(population[0])
pro.append(a)
#car.append(b)
#gor.append(c)
lista.append(i)
i = i + 1
    
print
print
print

best = 0
fitbest = 0

for i in range(NPOPULATION):
    if fitbest < fitness(population[i]):
        fitbest = fitness(population[i])
        best = i

print fitness(population[best])
print population[best]
#print population
print protein_reference, carb_reference, fat_reference
protein_sum = 0
carb_sum = 0
fat_sum = 0

for i in range(NGENES):
    protein_sum = protein_sum + population[best][i] * data[i][protein]
for i in range(NGENES):
    carb_sum = carb_sum + population[best][i] * data[i][carb]
for i in range(NGENES):
    fat_sum = fat_sum + population[best][i] * data[i][fat]
print protein_sum, carb_sum, fat_sum

protein_sum = 0
carb_sum = 0
fat_sum = 0

for i in range(NGENES):
    protein_sum = protein_sum + population[NGENES-1][i] * data[i][protein]
for i in range(NGENES):
    carb_sum = carb_sum + population[NGENES-1][i] * data[i][carb]
for i in range(NGENES):
    fat_sum = fat_sum + population[NGENES-1][i] * data[i][fat]
print protein_sum, carb_sum, fat_sum


plt.plot(lista, pro, 'ro')
plt.show()


