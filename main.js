const cricleBtn = document.getElementById("circle"),
rectangleBtn = document.getElementById("rectangle"),
lineBtn = document.getElementById("line"),
freelineBtn = document.getElementById("freeline"),
earserBtn = document.getElementById("earser"),
strokeColor = document.getElementById("strokeColor"),
fillColor = document.getElementById("fillColor");

let choosed_shape = "", fill_color = "white",stroke_color="black";

strokeColor.addEventListener("input", ()=>stroke_color=strokeColor.value)

fillColor.addEventListener("input", ()=> fill_color=fillColor.value)

cricleBtn.addEventListener("click",()=> choosed_shape = "circle")

rectangleBtn.addEventListener("click",()=> choosed_shape = "rectangle")

lineBtn.addEventListener("click" , ()=> choosed_shape = "line")

freelineBtn.addEventListener("click",()=> choosed_shape="freeline" )

earserBtn.addEventListener("click",()=> choosed_shape = "earse" )

const cvs = document.getElementById("cvs"),
pen = cvs.getContext("2d");
var startpoint = {x:0,y:0}
var drawflag = false

cvs.addEventListener("mousedown",(e)=>{
    if(choosed_shape == "circle")
    {
        pen.beginPath();
        pen.arc(e.offsetX,e.offsetY,50,0,2 * Math.PI);
        pen.lineWidth = "1"
        pen.strokeStyle = stroke_color
        pen.stroke()
        pen.fillStyle = fill_color
        pen.fill()
    }
    else if (choosed_shape == "rectangle")
    {
        pen.beginPath();
        pen.rect(e.offsetX,e.offsetY,200,100) 
        pen.lineWidth = "1";
        pen.strokeStyle=stroke_color;
        pen.fillStyle = fill_color;
        pen.fillRect(e.offsetX,e.offsetY,200,100)
        pen.stroke()
    }
    else if(choosed_shape == "line")
    {
        pen.beginPath()
        pen.lineWidth = '1'
        pen.strokeStyle=stroke_color;
        pen.moveTo(e.offsetX, e.offsetY)
    }
    else if (choosed_shape == "freeline")
    {
        pen.beginPath()
        pen.strokeStyle=stroke_color;
        pen.lineWidth = '1'
        pen.moveTo(e.offsetX , e.offsetY)
        drawflag = true
    }
    else
    {
        pen.beginPath()
        pen.strokeStyle="white";
        pen.lineWidth = "10"
        pen.moveTo(e.offsetX , e.offsetY)
        drawflag = true
    }
})
cvs.addEventListener("mousemove",(e)=>{
    if(drawflag)
    {
        pen.lineTo(e.offsetX, e.offsetY)
        pen.stroke()
    }
})
    
cvs.addEventListener("mouseup",(e)=>{
    if(choosed_shape == "line")
    {
        pen.lineTo(e.offsetX, e.offsetY)
        pen.stroke()
    }
    else if (choosed_shape == "freeline")
    {
        pen.lineTo(e.offsetX, e.offsetY)
        pen.stroke()
        drawflag = false
    }
    else if (choosed_shape == "earse")
    {
        pen.lineTo(e.offsetX, e.offsetY)
        pen.stroke()
        drawflag = false
    }
    
})


