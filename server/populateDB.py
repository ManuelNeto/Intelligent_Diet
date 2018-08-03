from pymongo import MongoClient
import csv

with open('alimentosDB.csv', 'rb') as f:
    reader = csv.reader(f)
    data = list(reader)

cliente = MongoClient('localhost', 27017)
banco = cliente['intelligentDiet']
alimentos = banco['alimentos']

for i in range(1, len(data)):
	att = data[i]
	alimento = { "name": att[0], "tipo": att[1], "proteina": att[2], 
				"gordura": att[3], "caboidrato": att[4], "calorias": att[5] }
	alimentos.insert(alimento)

