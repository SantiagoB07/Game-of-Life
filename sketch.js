
function setup() {
  createCanvas(600, 400);
  columnas = width / dimension
  filas = height / dimension;
  
  arreglo = crearArreglo2D(columnas, filas);
  nuevo_arreglo = crearArreglo2D(columnas, filas);
  
  
  for (let i = 0; i < columnas; i++)
  {
    for (let j = 0; j < filas; j++)
    {
      arreglo[i][j] = floor(random(2));
    }
  }
  
  
  
}

function draw() {
  background(0);
  
  NuevaGeneración();
  Dibujar();
  
  }


//Definir variables
let dimension = 20;
let columnas;
let filas;
let arreglo;
let nuevo_arreglo;

//Crear el arreglo 2D
function crearArreglo2D(columnas, filas)
{
  arreglo = new Array(columnas);
  for (let i = 0; i < arreglo.length; i++)
  {
    arreglo[i] = new Array(filas);
  } 
  return arreglo;
}

//Dibujar células
function Dibujar()
{
  for (let i = 1; i < columnas - 1; i++)
    {
    for (let j = 1; j < filas - 1; j++)
      {
      let x = i * dimension;
      let y = j * dimension;

      if (arreglo[i][j] == 1)
          {
          fill("red");
          rect(x, y, dimension, dimension);
          }
      }
    }
}

//Crear nueva generación
function NuevaGeneración() {

  // Contar vecinos vivos
  for (let x = 1; x < columnas - 1; x++) {
    for (let y = 1; y < filas - 1; y++) {
      let vecinos = 0;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          vecinos += arreglo[x+i][y+j];
        }
      }

      vecinos -= arreglo[x][y];
      
      // Reglas del juego de la vida
      if ((arreglo[x][y] == 1) && ((vecinos <  2) || vecinos > 3))
      {
        nuevo_arreglo[x][y] = 0;   
      } 
      else if ((arreglo[x][y] == 0) && (vecinos == 3))
      {
        nuevo_arreglo[x][y] = 1;
      }
      else
      {
        nuevo_arreglo[x][y] = arreglo[x][y];
      }
    }
  }

  // Intercambiar arreglos
  let arreglo_temporal = arreglo;
  arreglo = nuevo_arreglo;
  nuevo_arreglo = arreglo_temporal;
}  
            
