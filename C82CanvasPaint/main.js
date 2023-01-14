canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var lastpositionofx, lastpositionofy;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown (e){
    color=document.getElementById("colorinput").value;
    width=document.getElementById("widthinput").value;
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup (e){
    mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave (e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove (e){
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft
    current_position_of_mouse_y=e.clientY-canvas.offsetTop

    if (mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.moveTo(lastpositionofx, lastpositionofy);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }
   lastpositionofx=current_position_of_mouse_x;
   lastpositionofy=current_position_of_mouse_y;
}
function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}