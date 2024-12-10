class playerView extends EventTarget
{
    //Aca agarramos el evento de que se presiono una tecla y sacamos otro evento para moverlo.

	constructor()
    {
        //Imagen que contiene la secuencia de cuadros
        super();
       
        this.spritesheet_right = '../images/sonic3_spritesheet_right.png';
        this.spritesheet_left = '../images/sonic3_spritesheet_left.png';

        this.image = new Image();
        this.image.onload = () => {this.dispatchEvent( new CustomEvent('imgloaded'))};
        this.image.src = this.spritesheet_right;
        
        //Posición (x,y) del contexto de dibujo
        this.x = 40;
        this.y = 20;
        
		this.delta_x = 5;
    	this.delta_y = 5;

        //Tamaño del cuadro (ancho, alto)
        this.width = 114; 
        this.height = 120;
        
        //Cantidad de cuadros en una fila
        this.frames = 8; 
        
        //Cuadro actual
        this.frameIndex = 0; 
        
        //Número de fila que posee los cuadros
        this.row = 1; 
        
        //Velocidad de la animación
        this.ticksPerFrame = 20; 
        
        //Tiempo transcurrido
        this.tickCount = 0;

        this.scaleX = 1;
        this.scaleY = 1;

        this.isInitialized = true;
    }

    turnLeft()
    {
        this.image.src = this.spritesheet_left;
    }

    turnRight()
    {
        this.image.src = this.spritesheet_right;
    }

    update( playerState )
    {
        if ( this.isInitialized == true )
        {
            console.log(playerState);
            if ( playerState == 'idle')
            {
                this.frames = 9;
                this.row = 0;
                this.ticksPerFrame = 25;
            }

            if ( playerState == 'walking')
            {
                this.frames = 8;
                this.row = 1;
                this.ticksPerFrame = 30;
            }

            if ( playerState == 'running')
            {
                this.frames = 4;
                this.row = 2;
                this.ticksPerFrame = 2;
            }
        }
        
    }

}


export { playerView };