import pymysql
import json

# Connect to MySQL database
connection = pymysql.connect(
    host='localhost',
    user='root',
    password='Ttm9oClV',
    database='webcomponents',
    cursorclass=pymysql.cursors.DictCursor
)

cursor = connection.cursor()


# Read JSON file
with open('cuentas.json', 'r') as file:
    data = json.load(file)

    for item in data['cuentas']:
    
        userId = item['id']
        userUsername = item['username']
        userBalance = item['saldo']
        
        sql = "Insert into usuarios (id, username, saldo) VALUES (%s, %s, %s)"
        values = (userId, userUsername, userBalance)
        cursor.execute(sql, values)
        
connection.commit()
    
print("Data imported.")

connection.close()