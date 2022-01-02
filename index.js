function graphCircle() {
    var r = parseInt(document.getElementById('radio').value);
    var windowWidth = r+300;
    var windowHeight = r+300; 
    var cv = document.getElementById("fx");
    var ctx = cv.getContext("2d");
    cv.height = windowHeight;
    cv.width = windowWidth;

    ctx.translate((windowWidth / 2),(windowHeight / 2));
  
    drawaxis();
    function drawaxis() {
        var x = parseInt(document.getElementById('x').value);
        var y = parseInt(document.getElementById('y').value);
        var result = document.getElementById('result');


      var x_axis = {
        x: -windowWidth / 2,
        y: 0,
        xf: windowWidth / 2,
        yf: 0
      }
  
      var y_axis = {
        x: 0,
        y: -windowHeight / 2,
        xf: 0,
        yf: windowHeight /2
      }
  
      ctx.beginPath();
      ctx.moveTo(x_axis["x"],x_axis["y"]);
      ctx.lineTo(x_axis["xf"],x_axis["yf"]);
      ctx.stroke();
      ctx.closePath();
  
      ctx.beginPath();
      ctx.moveTo(y_axis["x"],y_axis["y"]);
      ctx.lineTo(y_axis["xf"],y_axis["yf"]);
      ctx.stroke();
      ctx.closePath();

      ctx.beginPath();
      ctx.lineWidth = 2;
  	  ctx.strokeStyle = "blue";
      ctx.moveTo((x_axis["x"],x_axis["y"]),(y_axis["x"]));
	    ctx.arc((x_axis["x"],x_axis["y"]),(y_axis["x"]),r, 0, 2*Math.PI, true);
	    ctx.stroke();
      ctx.closePath();

      ctx.beginPath();
      ctx.lineWidth = 2;
  	  ctx.strokeStyle = "blue";
      ctx.moveTo(x,y);
      ctx.lineTo((x+2),(y+2));
      ctx.stroke();
      ctx.closePath();

      function innerText () {
        let r = parseInt(document.getElementById('radio').value);
        let calculate = ((Math.pow(x,2))+(Math.pow(y,2)));

          if (calculate < (r*r)) { 
            result.innerText = `El punto (${x},${y}) esta dentro de la circunferencia ya que es menor al radio`;    
           } else if (calculate > (r*r)) {
            result.innerText = `El punto (${x},${y}) esta fuera de la circunferencia ya que es mayor al radio`;  
           } else if (calculate = (r*r)) {
            result.innerText = `El punto (${x},${y}) esta en la circunferencia ya que es igual al radio`; 
           }  
        }

        innerText()

      
    }
  };



