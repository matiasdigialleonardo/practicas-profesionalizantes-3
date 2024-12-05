class PortalView extends EventTarget
{
    //Aca agarramos el evento de que se presiono una tecla y sacamos otro evento para moverlo.

	constructor()
    {
        //Imagen que contiene la secuencia de cuadros
        super();
       
        this.image = new Image();
        this.image.onload = () => {this.dispatchEvent( new CustomEvent('imgloaded'))};
        this.image.src = '../images/portal.png';
        
        //Posición (x,y) del contexto de dibujo
        this.x = 30;
        this.y = 200;
        
		this.delta_x = 20;
    	this.delta_y = 10;

        //Tamaño del cuadro (ancho, alto)
        this.width = 230; 
        this.height = 500;
        
        //Cantidad de cuadros en una fila
        this.frames = 4; 
        
        //Cuadro actual
        this.frameIndex = 0; 
        
        //Número de fila que posee los cuadros
        this.row = 0; 
        
        //Velocidad de la animación
        this.ticksPerFrame = 50; 
        
        //Tiempo transcurrido
        this.tickCount = 0;

        this.scaleX = 0.5
        this.scaleY = 0.5

        this.isInitialized = true;
    }
}


export { PortalView };