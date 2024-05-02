const selectProvinciaElement = document.getElementById('provincia-select');
const selectDepartamentoElement = document.getElementById('departamento-select');
const selectMunicipioElement = document.getElementById('municipio-select');
const selectLocalidadElement = document.getElementById('localidad-select');

function removeAllChildNodes(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}


fetch('http://localhost:3000/provincia/all')
  .then(response => response.json())
  .then(data => {

        const first_option = document.createElement('option');
        first_option.text = "Provincia"
        selectProvinciaElement.appendChild(first_option)

    data.forEach(provincia => {
        const option = document.createElement('option');
        option.value = provincia.idProvincia
        option.text = provincia.nombre
        selectProvinciaElement.appendChild(option)
    })
  })
  .catch(error => {
    console.error('Error fetching provinces:', error);
});


selectProvinciaElement.addEventListener('change', (event) => {

    removeAllChildNodes(selectDepartamentoElement);

    var selectedProvinceId = event.target.value;

    fetch(`http://localhost:3000/departamento/provincia_asociada/${selectedProvinceId}`)
    .then(response => response.json())
    .then(data => {

        const first_option = document.createElement('option');
        first_option.text = "Departamento"
        selectDepartamentoElement.appendChild(first_option)

        data.forEach(department => {
            const option = document.createElement('option');
            option.value = department.idDepartamento
            option.text = department.nombre
            selectDepartamentoElement.appendChild(option)
        })

    })
        .catch(error => {
        console.error('Error fetching provinces:', error);
    });
});

selectDepartamentoElement.addEventListener('change', (event) => {

    removeAllChildNodes(selectMunicipioElement);

    var selectedDepartamentoId = event.target.value;

    fetch(`http://localhost:3000/municipio/departamento_asociado/${selectedDepartamentoId}`)
    .then(response => response.json())
    .then(data => {

        const first_option = document.createElement('option');
        first_option.text = "Municipio"
        selectMunicipioElement.appendChild(first_option)

        data.forEach(municipio => {
            const option = document.createElement('option');
            option.value = municipio.idMunicipio
            option.text = municipio.nombre
            selectMunicipioElement.appendChild(option)
        })
    });
});

selectMunicipioElement.addEventListener('change', (event) => {

    removeAllChildNodes(selectLocalidadElement);

    var selectedMunicipioId = event.target.value;
    
    const first_option = document.createElement('option');
    first_option.text = "Localidad"
    selectLocalidadElement.appendChild(first_option)


    fetch(`http://localhost:3000/localidad/municipio_asociado/${selectedMunicipioId}`)
    .then(response => response.json())
    .then(data => {
        data.forEach(localidad => {
            const option = document.createElement('option');
            option.value = localidad.idLocalidad
            option.text = localidad.nombre
            selectLocalidadElement.appendChild(option)
        })
    });
});

selectLocalidadElement.addEventListener('change', (event) => {

    var idLocalidad = event.target.value;

    fetch(`http://localhost:3000/localidad/${idLocalidad}`)
        .then(response => response.json())
        .then(data => {

            const infoDiv = document.getElementById('info-div');

            removeAllChildNodes(infoDiv);

            const propertyNames = [
                'nombre',
                'latitud',
                'longitud',
                'CodigoUta2010',
                'CodigoUta2020',
            ]

            for (let propertyName of propertyNames) {
                const propertyDiv = document.createElement('div');
            
                const propertyLabel = document.createElement('label');
                const propertySpan = document.createElement('span');

                propertyLabel.textContent = propertyName.charAt(0).toUpperCase() + propertyName.slice(1) + ": ";
                propertySpan.textContent = data[propertyName];

                propertyDiv.appendChild(propertyLabel);
                propertyDiv.appendChild(propertySpan);

                infoDiv.appendChild(propertyDiv);

            }
    })
})

function removeAllChildNodes(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}
