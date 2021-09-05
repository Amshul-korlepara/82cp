mouseEvent="";
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
   // Color="red";
    //radius="30";
    //width="2";

    canvas.addEventListener("mousedown",mymousedown);

    function mymousedown(e) {
        //alert("test");//
        Color=document.getElementById("color1").value;
        width= document.getElementById("width1").value;
        radius=document.getElementById("radius1").value;
        mouseEvent="mousedown";
        
    
    }

    canvas.addEventListener("mouseleave",mymouseleave);

    function mymouseleave(e) {

        mouseEvent="mouseleave";
        
    }

    
    canvas.addEventListener("mouseup",mymouseup);

    function mymouseup(e) {

        mouseEvent="mouseup";
    }   
    
    canvas.addEventListener("mousemove",mymousemove);
    function mymousemove(e){
    current_position_of_mouse_X=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_Y=e.clientY-canvas.offsetTop;
    
    if (mouseEvent=="mousedown") {
        //alert("hi");
        ctx.beginPath();
        ctx.strokeStyle=Color;
        ctx.lineWidth=width;
        ctx.arc(current_position_of_mouse_X,current_position_of_mouse_Y,radius,0,2 * Math.PI);
        ctx.stroke();
        
    }
    }
