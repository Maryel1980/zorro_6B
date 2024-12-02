canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Define el ancho y alto de la imagen del explorador.



background_image = "gallinero.jpg";

zorro_image = "zorro.png";

zorro_x = 10;
zorro_y = 10;

//Crea la función "add()"
function add(){
background_imgTag= new Image();	    //Define la variable con una nueva imagen
background_imgTag.onload = uploadBackground;// Define una función para cargar esta variable
background_imgTag.src= background_image;// Carga la imagen

zorro_imgTag= new Image();//Define la variable con una nueva imagen
zorro_imgTag.onload = uploadzorro;	    // Define una función para cargar esta variable
zorro_imgTag.src=zorro_image; // Carga la imagen
}
//Crea una función "uploadBackground()".
 function uploadBackground(){
    ctx.drawImage(background_imgTag, 0,0, canvas.width, canvas.height);
 }                             

//Crea una función "uploadrover()".
function uploadzorro(){
    ctx.drawImage(zorro_imgTag, zorro_x, zorro_y, 100, 90); //Dibuja la imagen del zorro
}



window.addEventListener("keydown", my_keydown );
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    //Escribe el codigo si keypressed es up (arriba). El valor ASCIII para "arriba" es 38.
    window.addEventListener("keydown", my_keydown);

    function my_keydown(e)
    {
        keyPressed = e.keyCode;
        console.log(keyPressed);
            if(keyPressed == '38')
            {
                up();
            }
            if(keyPressed == '40')
            {
                down();
            }
    
            if(keyPressed == '37')
            {
                left();
            }
            if(keyPressed == '39')
            {
                right();
            }
    }
 
    function up()
    {
        if(zorro_y >=0) //este es el limite superior del canva
        {
            zorro_y = zorro_y - 5; // acá se actualiza la coordenada en y
             uploadBackground(); //se actualiza la imagen del fondo del canva
             uploadzorro(); //se actualiza la imagen del personaje
        }
    }
    function down()
    {
        if(zorro_y <=500)//es el limite inferior del canva
        {
            zorro_y =zorro_y+ 5;
            uploadBackground();
            uploadzorro();
        }
    }
    //ESTA PARTE LA TIENEN QUE HACER ELLOS
    function left()
    {
        if(zorro_x >= 0)
        {
            zorro_x =zorro_x - 5;
            uploadBackground();
             uploadzorro();
        }
    }
    function right()
    {
        if(zorro_x <= 700)
        {
            zorro_x =zorro_x + 5;
            console.log("Cuando se presione la flecha derecha,  x = " + rover_x + " | y = " +rover_y);
            uploadBackground();
            uploadzorro();
       }
    }
}