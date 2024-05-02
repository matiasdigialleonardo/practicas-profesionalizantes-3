import pymysql
import csv

# Connect to MySQL database
connection = pymysql.connect(
    host='localhost',
    user='root',
    password='Ttm9oClV',
    database='mydb',
    cursorclass=pymysql.cursors.DictCursor
)

with open('localidades.csv', newline="", encoding='utf-8') as csvfile:
    csvreader = csv.DictReader(csvfile)
            
    with connection.cursor() as cursor:
        for row in csvreader:
                       
            try:      
                # Extract the value using the row header thanks to DictReader 
                provincia_nombre = row.get('Provincia')
                departamento_nombre = row.get('Departamento')
                municipio_nombre = row.get('Municipio')
                longitud = row.get('Longitud')
                latidud = row.get('Latitud')
                codigo_uta_2010 = row.get('Codigo UTA 2010')
                codigo_uta_2020 = row.get('Codigo UTA 2020')
                localidad_nombre = row.get('Localidad')
                
                cursor.execute("SELECT idProvincia FROM Provincia WHERE nombre = %s", (provincia_nombre,))
                provincia_exists = cursor.fetchone()
                
                if not provincia_exists:
                    sql = "INSERT INTO Provincia (nombre) VALUES (%s)"
                    cursor.execute(sql, (provincia_nombre,))
                    provincia_id = cursor.lastrowid

                cursor.execute("SELECT idDepartamento FROM Departamento WHERE nombre COLLATE utf8mb3_bin = %s AND Provincia_idProvincia = %s", (departamento_nombre, provincia_id))
                
                departamento_exists = cursor.fetchone()
                
                if not departamento_exists:
                    sql = "INSERT INTO Departamento (nombre, Provincia_idProvincia) VALUES (%s, %s)"
                    
                    if provincia_exists:
                        provincia_id = provincia_exists['idProvincia']
                    
                    cursor.execute(sql, (departamento_nombre, provincia_id))
                    departamento_id = cursor.lastrowid
                
                cursor.execute("SELECT idMunicipio FROM Municipio WHERE nombre = %s AND Departamento_idDepartamento = %s", (municipio_nombre, departamento_id))
                municipio_exists = cursor.fetchone()
                
                if not municipio_exists:
                    
                    if departamento_exists:
                        departamento_id = departamento_exists['idDepartamento']
                    
                    sql = "INSERT INTO Municipio (nombre, Departamento_idDepartamento) VALUES (%s, %s)"
                    cursor.execute(sql, (municipio_nombre, departamento_id))
                    municipio_id = cursor.lastrowid
                    
                cursor.execute("SELECT idLocalidad FROM Localidad WHERE nombre = %s AND Municipio_idMunicipio = %s", (localidad_nombre, municipio_id))
                localidad_exists = cursor.fetchone()
                
                if not localidad_exists:
                    
                    if municipio_exists:
                        municipio_id = municipio_exists['idMunicipio']
                    
                    sql = "INSERT INTO Localidad (nombre, latitud, longitud, Municipio_idMunicipio, CodigoUta2010, CodigoUta2020) VALUES (%s, %s, %s, %s, %s, %s)"
                    cursor.execute(sql, (localidad_nombre, latidud, longitud, municipio_id, codigo_uta_2010, codigo_uta_2020))
                    
                connection.commit()
                    
            except Exception as e:
                print("Error:", e)

print("Data imported.")

connection.close()