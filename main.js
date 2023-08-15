var num=document.getElementById("array_size"),n=num.value;
var inp_gen=document.getElementById("array_gen");
var array_speed=document.getElementById("array_speed");
var bar_width=document.getElementById("bar_width"),t=bar_width.value;
var clean=document.getElementById("clean");

const array=[];
const barr=[];
const labelbar=[];

inp_gen.addEventListener("click",init);

num.addEventListener("input",update_array);
array_speed.addEventListener("input",update_speed);

bar_width.addEventListener("input",update_width);

clean.addEventListener("click",clear_screen);

function init(){
    //document.getElementById("show").innerHTML="";
    
    container.innerHTML="";
    for(let i=0; i<n;i++){
        array[i]=Math.floor(Math.random() * 100)+1;/*in range of 1 to 100 */
        barr[i]=document.createElement("div");
        barr[i].style.height=array[i]+ "%";
       
        barr[i].classList.add("bar");
        barr[i].style.width= t +"px";
        
        labelbar[i]=document.createElement("label");
        
        labelbar[i].classList.add("labelbar");
       
        labelbar[i].innerHTML=array[i];
        barr[i].appendChild(labelbar[i]);
        container.appendChild(barr[i]);
    }
    
    
}

function update_array(){
   
    n=num.value;
    //init();
   
}
function update_width(){
    t=bar_width.value;
    
}
function clear_screen(){
    container.innerHTML="";
    document.getElementById("show").innerHTML="";
}


//speed  control

var speed=1000;
function update_speed(){
    var u_speed=array_speed.value;
    
    switch(parseInt(u_speed))
    {
        case 1: speed=1;
        break;
        case 2: speed=10;
        break;
        case 3: speed=100;
        break;
        case 4: speed=1000;
        break;

    }
    delay=10000/(Math.floor(n/10)*speed);
}
var delay=10000/(Math.floor(n/10)*speed);

function disablebutton(){
    document.querySelector(".selection").disabled=true;
    document.querySelector(".insertion").disabled=true;
    document.querySelector(".bubble").disabled=true;
    document.querySelector(".heap").disabled=true;
    document.querySelector(".quick").disabled=true;
    document.querySelector(".mergesort").disabled=true;
}
function enablebutton()
{
    document.querySelector(".selection").disabled=false;
    document.querySelector(".insertion").disabled=false;
    document.querySelector(".bubble").disabled=false;
    document.querySelector(".heap").disabled=false;
    document.querySelector(".quick").disabled=false;
    document.querySelector(".mergesort").disabled=false;
}

function sliderdisable()
{
    document.querySelector(".b1").disabled=true;
    document.querySelector(".b2").disabled=true;
    document.querySelector(".b3").disabled=true;
    document.querySelector(".b4").disabled=true;
    document.querySelector(".genbtn").disabled=true;
}
function sliderenable(){
    document.querySelector(".b1").disabled=false;
    document.querySelector(".b2").disabled=false;
    document.querySelector(".b3").disabled=false;
    document.querySelector(".b4").disabled=false;
    document.querySelector(".genbtn").disabled=false;
}




