from pymongo import MongoClient
import csv

with open('alimentosDB.csv', 'rb') as f:
    reader = csv.reader(f)
    data = list(reader)

cliente = MongoClient('localhost', 27017)
banco = cliente['intelligentDiet']
alimentos = banco['alimento']


