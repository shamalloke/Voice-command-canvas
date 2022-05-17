x=0;
y=0;
draw_circle="";
draw_rect="";

function setup(){
createCanvas(600,600); 
}

var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function start(){
    recognition.start();
    document.getElementById("status").innerHTML="System is listening please speak";
}

recognition.onresult=function(event){
    console.log(event);   
    var content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="Speech has been recognised as: " + content;
    if(content == "circle"){
x=Math.floor(Math.random()*600);
y=Math.floor(Math.random()*600);
document.getElementById("status").innerHTML="Started drawing circle ";
draw_circle="set"
    }
    if(content == "Rectangle"){
        x=Math.floor(Math.random()*600);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Started drawing rectangle";
        draw_rect="set"
            }
}

function draw(){
if(draw_circle === "set"){
    radius=Math.floor(Math.random()*100);
    circle(x,y,radius);
    document.getElementById("status").innerHTML="Circle is drawn";
    draw_circle=" ";
}
if(draw_rect== "set"){
    rect(x,y,40,60)
    document.getElementById("status").innerHTML="Rectangle is drawn";
    draw_rect=" ";    
}
}

