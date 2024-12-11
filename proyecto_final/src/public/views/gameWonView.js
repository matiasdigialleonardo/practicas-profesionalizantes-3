export class GameWonView extends HTMLElement {
    constructor() {
        super();

        const gameWonContainer = document.createElement('div');
        gameWonContainer.classList.add('gameWonContainer');

        const message = document.createElement('div');
        message.textContent = '¡Has llegado al final! Gracias por jugar. \n Este projecto fue realizado por los estudiantes Di Gialleonardo Matias y Vaggi Kevin, para la materia Practicas Profesionalizantes 3, de la carrera Analista en Sistemas, dada en el Instituto Superior de Formacion Tecnica Nro. 151.\n Nos gustaria utilizar esta seccion para, ademas, comentar algunas mejores deseariamos realizar al juego, estas siendo las siguientes: ';
        
        message.classList.add('textDisplay');

        const image = document.createElement('img');
        image.src = '../images/isft_151_logo.png';
        image.alt = 'Logo del Instituto Superior de Formacion Tecnica Nro. 151';
        image.classList.add('isft151Logo');


        // Bullet list that foes below the game won message
        const gameWonlistContainer = document.createElement('ul');
        gameWonlistContainer.classList.add('gameWonbulletList');

        const listItem1 = document.createElement('li');
        listItem1.textContent = 'Agregar mas laberintos, asi como otros elementos que aumenten la complejidad de los mismos.';
        gameWonlistContainer.appendChild(listItem1);

        const listItem2 = document.createElement('li');
        listItem2.textContent = 'Agregar un sistema de conectividad que permita a dos jugadores competir entre ellos.';
        gameWonlistContainer.appendChild(listItem2);

        const listItem3 = document.createElement('li');
        listItem3.textContent = 'Agregar un sistema de puntajes en base la destreza con la que sean completados los niveles.';
        gameWonlistContainer.appendChild(listItem3);

        const listItem4 = document.createElement('li');
        listItem4.textContent = 'Agregar nuevos personajes que el jugador pueda elegir y desbloquear en la medida que avance en el juego.';
        gameWonlistContainer.appendChild(listItem4);


        gameWonContainer.appendChild(image);
        gameWonContainer.appendChild(message);
        gameWonContainer.appendChild(gameWonlistContainer);

        this.appendChild(gameWonContainer);
    }

    connectedCallback() {

    }

    disconnectedCallback() {

    }

    adoptedCallback() {

    }

    attributeChangedCallback(oldValue, newValue) {

    }

    static observableAttributes() {
        return [];
    }
}

customElements.define('x-app-gamewonview', GameWonView);