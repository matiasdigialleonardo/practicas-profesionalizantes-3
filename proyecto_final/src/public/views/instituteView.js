class InstituteView extends EventTarget
{
    //Aca agarramos el evento de que se presiono una tecla y sacamos otro evento para moverlo.

	constructor()
    {
        //Imagen que contiene la secuencia de cuadros
        super();
       
        this.image = new Image();
        this.image.onload = () => {this.dispatchEvent( new CustomEvent('imgloaded'))};
        this.image.src = '../images/institute.png';
        
        this.labyrinth2XCoords = 720;
        this.labyrinth2YCoords = 390;

        //Posición (x,y) del contexto de dibujo
        this.x = 30000;
        this.y = 200;
        
		this.delta_x = 20;
    	this.delta_y = 10;

        //Tamaño del cuadro (ancho, alto)
        this.width = 460; 
        this.height = 500;
        
        //Cantidad de cuadros en una fila
        this.frames = 0; 
        
        //Cuadro actual
        this.frameIndex = 0; 
        
        //Número de fila que posee los cuadros
        this.row = 0; 
        
        //Velocidad de la animación
        this.ticksPerFrame = 0; 
        
        //Tiempo transcurrido
        //this.tickCount = 0;

        this.scaleX = 0.4
        this.scaleY = 0.4

        this.isInitialized = true;
    }
}


export { InstituteView };