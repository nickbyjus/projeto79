var mouseEvent = "empty";
lastPositonX, lastPositionY;

  canvas = document.getElementById('myCanvas');
  ctx = canvas.getContext("2d");

  color = "black";
  widthLine = 1;
  canvas.addEventListener("mousedown", myMouseDown);
  function myMouseDown(e)
  

  canvas.addEventListener("mousemove", myMouseMove);
  fuction myMouseMove(e)
  {
    PositionMouseX = e.clientX - canvas.offsetLeft;
    PositionMouseY = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
    ctx.benginPTH();
    ctx.strokeStyle = color;
    ctx.linewidth = widthLine;
    }
  }
  menuListArray = ["Pizza Vegetariana",
                      "Pizza de Frango",
                      "Pizza Portuguesa",
                      "Pizza Quatro Queijos",
                      "Pizza de Calabresa",
                      "Pizza Extravaganza"];