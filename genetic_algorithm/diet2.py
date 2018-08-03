import sys
import json
import random
from deap import creator, base, tools, algorithms
import matplotlib.pyplot as plt

# input_json = sys.argv[1]
# data_json = json.loads(input_json)

data = []
with open("data_file.json", "r") as read_file:
    data = json.load(read_file)

protein_reference = random.randint(0, 500)
fat_reference = random.randint(0, 500)
carb_reference = random.randint(0, 500)

protein = "protein"
fat = "fat"
carb = "carb"
NGENES = len(data)
NGENERATIONS=50
NPOPULATION=100

creator.create("FitnessMax", base.Fitness, weights=(1.0,1.0,1.0))
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
    return max (0.01, 1./abs(protein_reference-protein_sum+0.123)), max (0.01, 1./abs(carb_reference-carb_sum+0.123)), max (0.01, 1./abs(fat_reference - fat_sum+0.123)),
    
def fitness2(individual):
    protein_sum = 0
    carb_sum = 0
    fat_sum = 0
    for i in range(NGENES):
        protein_sum = protein_sum + individual[i] * data[i][protein]
    for i in range(NGENES):
        carb_sum = carb_sum + individual[i] * data[i][carb]
    for i in range(NGENES):
        fat_sum = fat_sum + individual[i] * data[i][fat]
    return protein_sum, carb_sum, fat_sum
    
toolbox.register("evaluate", fitness)
toolbox.register("mate", tools.cxTwoPoint)
toolbox.register("mutate", tools.mutFlipBit, indpb=0.05)
#toolbox.register("select", tools.selTournament, tournsize=3)
toolbox.register("select", tools.selTournament, tournsize=3)

population = toolbox.population(n=NPOPULATION)

pro = []
car = []
gor = []
lista = []
i = 1

for gen in range(NGENERATIONS):
    
    a, b, c = fitness(population[0])
    pro.append(a)
    car.append(b)
    gor.append(c)
    lista.append(i)
    i = i + 1
    
    offspring = algorithms.varAnd(population, toolbox, cxpb=0.5, mutpb=0.1)
    fits = toolbox.map(toolbox.evaluate, offspring)
    for fit, ind in zip(fits, offspring):
        ind.fitness.values = fit
    population = toolbox.select(offspring, k=len(population))

a, b, c = fitness(population[0])
pro.append(a)
car.append(b)
gor.append(c)
lista.append(i)
i = i + 1
    
print
print
print
print fitness(population[0])
print population[0]
#print population
print protein_reference, carb_reference, fat_reference
print fitness2(population[0])





plt.plot(lista, pro, 'ro')
plt.plot(lista, car, 'go')
plt.plot(lista, gor, 'bo')

#plt.axis([0, 6, 0, 20])
plt.show()


