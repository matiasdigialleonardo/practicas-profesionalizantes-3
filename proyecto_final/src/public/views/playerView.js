class playerView extends EventTarget
{
    //Aca agarramos el evento de que se presiono una tecla y sacamos otro evento para moverlo.

	constructor()
    {
        //Imagen que contiene la secuencia de cuadros
        super();
       
        this.image = new Image();
        this.image.onload = () => {this.dispatchEvent( new CustomEvent('imgloaded'))};
        this.image.src = '../images/sonic3_spritesheet.png';
        
        //Posición (x,y) del contexto de dibujo
        this.x = 20;
        this.y = 20;
        
		this.delta_x = 20;
    	this.delta_y = 10;

        //Tamaño del cuadro (ancho, alto)
        this.width = 114; 
        this.height = 120;
        
        //Cantidad de cuadros en una fila
        this.frames = 8; 
        
        //Cuadro actual
        this.frameIndex = 0; 
        
        //Número de fila que posee los cuadros
        this.row = 0; 
        
        //Velocidad de la animación
        this.ticksPerFrame = 40; 
        
        //Tiempo transcurrido
        this.tickCount = 0;

        this.isInitialized = true;
    }

    update( playerState )
    {
        if ( this.isInitialized == true )
        {
            console.log(playerState);
            if ( playerState == 'idle')
            {
                this.frames = 9;
                this.frameIndex = 0;
                this.row = 0;
                this.ticksPerFrame = 12;
            }

            if ( playerState == 'walking')
            {
                this.frames = 8;
                this.frameIndex = 0;
                this.row = 1;
                this.ticksPerFrame = 30;
            }

            if ( playerState == 'running')
            {
                this.frames = 4;
                this.frameIndex = 0;
                this.row = 2;
                this.ticksPerFrame = 2;
            }
        }
        
    }

}


export { playerView };