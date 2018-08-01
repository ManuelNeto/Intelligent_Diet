import random
import json

data = []
NELEMENTS = 20

for i in range (NELEMENTS):
	element = {}
	element["protein"] = 13 + random.randint(0, 100)
	element["fat"] = 11 + random.randint(0, 100)
	element["carb"] = 5 + random.randint(0, 100)
	
	data.append(element)
	
with open("data_file.json", "w") as write_file:
    json.dump(data, write_file)


