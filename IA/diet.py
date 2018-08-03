#define coding: utf-8

import math
import sys
import json
import random
from deap import creator, base, tools, algorithms
import matplotlib.pyplot as plt

# lendo a entrada do arquivo json de teste dos alimentos
data = []
with open("data_file.json", "r") as read_file:
    data = json.load(read_file)

# definindo o valor dos macronutrientes necessários
protein_reference = random.randint(0, 500)
fat_reference = random.randint(0, 500)
carb_reference = random.randint(0, 500)

# constantes
protein = "protein"
fat = "fat"
carb = "carb"

# quantidade de genes(alimentos)
NGENES = len(data)
# quantidade de gerações
NGENERATIONS=200
# tamanho da população inicial
NPOPULATION=200

# definindo um indivíduo que herda da classe FitnessMax do DEAP
creator.create("FitnessMax", base.Fitness, weights=(1.0,))
creator.create("Individual", list, fitness=creator.FitnessMax)

# criando uma toolboox
toolbox = base.Toolbox()

# registrando a função que inicializa os genes
toolbox.register("attr_bool", random.randint, 0, 1)
# registrando um indivíduo e sua quantidade de genes e seu tipo (cromossomo)
toolbox.register("individual", tools.initRepeat, creator.Individual, toolbox.attr_bool, n=NGENES)
# registrando a população formada por uma lista de indivíduoss
toolbox.register("population", tools.initRepeat, list, toolbox.individual)

# definindo a função fitness - recebe um indivíduo como parâmetro
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
    
    v = min (diffProtein, diffCarb, diffFat)
    
    return v,

# registrando a função fitness
toolbox.register("evaluate", fitness)
# registrando a função de cruzamento
toolbox.register("mate", tools.cxTwoPoint)
# definindo a função de mutação e sua probabilidade de mutar um gene (bit)
toolbox.register("mutate", tools.mutFlipBit, indpb=0.01)
# definindo a função de seleção e o tamanho de cada torneio
toolbox.register("select", tools.selTournament, tournsize=10)

# definindo o tamanho inicial da população
population = toolbox.population(n=NPOPULATION)

pro_v = []
car_v = []
gor_v = []
fit_v = []

# retorna o melhor indivíduo
def get_best(population):
    bestfit = -1
    best = 0
    for i in range(NPOPULATION):
        f = fitness(population[i])
        if f > bestfit:
            bestfit = f
            best = i
    return best

# retorna os valores de proteina, carbono e gordura do melhor indivíduo
def get_pro_car_gor_sum(population):
    best = get_best(population)
    protein_sum = 0
    carb_sum = 0
    fat_sum = 0
    for i in range(NGENES):
        protein_sum = protein_sum + population[best][i] * data[i][protein]
    for i in range(NGENES):
        carb_sum = carb_sum + population[best][i] * data[i][carb]
    for i in range(NGENES):
        fat_sum = fat_sum + population[best][i] * data[i][fat]
    return protein_sum, carb_sum, fat_sum
    
# salva o estado atual para a plotagem
def save_state():
    best = get_best(population)
    f = fitness(population[best])
    fit_v.append(f)
    
    protein_sum, carb_sum, fat_sum = get_pro_car_gor_sum(population)

    pro_v.append(protein_sum)
    car_v.append(carb_sum)
    gor_v.append(fat_sum)
    
# algoritmo genético em si: mutação, geração e seleção
for gen in range(NGENERATIONS):
    save_state()
    # cruzamento com probabilidade de 0.5 e mutação com probabilidade de 0.1
    offspring = algorithms.varAnd(population, toolbox, cxpb=0.5, mutpb=0.1)
    # calculando o valor fitness de todos os indivíduos
    fits = toolbox.map(toolbox.evaluate, offspring)
    for fit, ind in zip(fits, offspring):
        ind.fitness.values = fit
    # seleção da nova população
    population = toolbox.select(offspring, k=len(population))

save_state()

print fitness(population[get_best(population)])
print protein_reference, carb_reference, fat_reference
print get_pro_car_gor_sum(population)

# plotando os dados

# pontos de fitness
#plt.plot(fit_v, 'ro', markersize=1.0)

l = [protein_reference for i in range(NGENERATIONS)]
plt.plot(l, 'r', markersize = 2.5)
plt.plot(pro_v, 'ro', markersize = 1)

l = [carb_reference for i in range(NGENERATIONS)]
plt.plot(l, 'g', markersize = 2.5)
plt.plot(car_v, 'go', markersize = 1)

l = [fat_reference for i in range(NGENERATIONS)]
plt.plot(l, 'b', markersize = 2.5)
plt.plot(gor_v, 'bo', markersize = 1)

plt.show()






