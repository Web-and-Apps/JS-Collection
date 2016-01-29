
    <!DOCTYPE html>
    <html lang="en">
    
    
    
    
    
    <head>
     <style>
         #myCanvas {
             border: 1px solid black;
         }
     </style>
    <script>
       var canvas, ctx;
     
       function init() {
         // This function is called after the page is loaded
         // 1 - Get the canvas
         canvas = document.getElementById('myCanvas');
         // 2 - Get the context
         ctx=canvas.getContext('2d');
         // 3 - we can draw
         
         
         drawSomething1();
         drawSomething2();
       }
       
       
       function drawSomething1() {
         // draw a red rectangle
         ctx.fillStyle='#FF0000';
         ctx.fillRect(0,0,80,100);
       }
       
        function drawSomething2() {
         // draw a red rectangle
         ctx.fillStyle='#FF0000';
         ctx.fillRect(80,100,160,200);
       }
       
       
    </script>
    </head>
    
    
    
    
    
    
    
    <body onload="init();">
        <canvas id="myCanvas" width="200" height="200">
                Your browser does not support the canvas tag.
        </canvas>
    </body>
    </html>
