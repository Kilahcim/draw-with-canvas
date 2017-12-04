const canvas = document.querySelector('#draw');
//  w canvasie nie rysujemy bezpośrednio na obiekcie canvas, robimy to na tak zwanym kontekscie
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 50;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if(!isDrawing)
  return; // Zatrzymuje event w momencie gdy zmienna isDrawing ma wartość TRUE
  console.log(e);
  context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  context.beginPath();
  // start
  context.moveTo(lastX, lastY);
  // koniec
  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();

  lastX = e.offsetX;
  lastY = e.offsetY;
  hue++;
  if(hue >=360){
    hue = 0;
  }

  if(context.lineWidth >= 100 || context.lineWidth <= 1 ) {
    direction = !direction;
  }
  if(direction) {
    context.lineWidth++;
  } else {
    context.lineWidth--;
  }  
}




//  obiekt maousemove zawiera koordynaty X i Y.
canvas.addEventListener('mousemove', draw);

canvas.addEventListener('mousedown', function(e){
  isDrawing = true;
  lastX = e.offsetX;
  lastY = e.offsetY;
});

canvas.addEventListener('mouseup', function(){
  isDrawing = false;
});
canvas.addEventListener('mouseout', function(){
  isDrawing = false;
});
