cursor.execute("SELECT idDepartamento FROM Departamento WHERE nombre = %s", (departamento_nombre,))