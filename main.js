var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    var mouseevent="empty";
var last_position_x,last_position_y;
    color = "black";
    width_of_line = 2;
    
    canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
mouseevent="mouseDown"; 
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e) {
mouseevent="mouseUp"; 
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e) {
mouseevent="mouseLeave"; 
}
